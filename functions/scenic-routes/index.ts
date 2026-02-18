
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const ALLOWED_IMAGE_DOMAINS = [
  'images.unsplash.com',
  'plus.unsplash.com',
  'source.unsplash.com',
  'dojjyarpayutgwwvyvho.supabase.co'
];

function isValidImageUrl(url: string): boolean {
  if (!url) return true; // Empty is fine, handled by frontend
  try {
    const parsed = new URL(url);
    return ALLOWED_IMAGE_DOMAINS.some(domain => parsed.hostname === domain || parsed.hostname.endsWith('.' + domain));
  } catch {
    return false;
  }
}

// Recursive function to sanitize object
function sanitizeData(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeData(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj: any = {};
    for (const key in obj) {
      if (typeof obj[key] === 'string' && (key.includes('image') || key.includes('url') || key.includes('photo'))) {
        // Check if it looks like a URL
        if (obj[key].startsWith('http')) {
             if (isValidImageUrl(obj[key])) {
                newObj[key] = obj[key];
             } else {
                console.warn(`Blocked invalid image URL: ${obj[key]}`);
                newObj[key] = ''; // Blocked
             }
        } else {
            newObj[key] = obj[key];
        }
      } else {
        newObj[key] = sanitizeData(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    
    // Parse query params
    const limitParam = url.searchParams.get('limit')
    const offsetParam = url.searchParams.get('offset')
    
    // Validate limit (1-50)
    let limit = 6 // Default
    if (limitParam) {
        const parsedLimit = parseInt(limitParam)
        if (!isNaN(parsedLimit)) {
            if (parsedLimit < 1) limit = 1
            else if (parsedLimit > 50) limit = 50
            else limit = parsedLimit
        }
    }

    const offset = parseInt(offsetParam || '0') || 0

    // Initialize Supabase Client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Fetch data
    // "按 updated_at 倒序"
    const { data, error } = await supabaseClient
      .from('scenic_routes')
      .select('*')
      .eq('status', 'published')
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) throw error

    // Sanitize data
    const sanitizedData = sanitizeData(data);

    const responseData = {
      code: 0,
      msg: 'ok',
      data: sanitizedData
    };
    
    const jsonString = JSON.stringify(responseData);
    
    // Generate ETag
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(jsonString);
    const hashBuffer = await crypto.subtle.digest('SHA-1', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const etag = '"' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('') + '"';

    // Check If-None-Match
    const ifNoneMatch = req.headers.get('if-none-match');
    if (ifNoneMatch === etag) {
        return new Response(null, {
            status: 304,
            headers: {
                ...corsHeaders,
                'Cache-Control': 'public, max-age=60, s-maxage=60', // Cache for 60s
                'ETag': etag
            }
        });
    }

    // Return success response
    return new Response(jsonString, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=60',
        'ETag': etag
      },
    })

  } catch (error) {
    // Return error response
    return new Response(JSON.stringify({
      code: 1,
      msg: error.message || 'Internal Server Error',
      data: []
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    })
  }
})
