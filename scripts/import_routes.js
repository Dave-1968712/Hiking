
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { createClient } = require('@supabase/supabase-js');
const routesData = require('./routes_data');

// Config
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Missing SUPABASE_URL or SUPABASE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log(`Found ${routesData.length} routes to import.`);

// Transform data
const transformedRoutes = routesData.map(route => {
    // Parse duration to get days (e.g. "4-5天" -> 5)
    let days = 1;
    if (route.duration) {
        const daysMatch = route.duration.match(/(\d+)/g);
        if (daysMatch) {
            // Take the max number found
            days = Math.max(...daysMatch.map(Number));
        }
    }

    return {
        // id: route.id, // Let database generate ID or insert explicit ID
        // Since we want to preserve IDs for now (e.g. if other code refs it), we can try inserting.
        // If we omit it, DB will generate. 
        // Given I might reference IDs in `index.html` (e.g. `onclick="showRouteDetails(1)"`), 
        // I should probably preserve them or update frontend to use new IDs.
        // The frontend will be refactored to use dynamic data, so new IDs are fine.
        // But to keep consistency with the "static import" concept, I'll try to preserve them if possible.
        // However, Supabase IDENTITY column auto-generates.
        // I will omit ID and let DB generate, but I will make sure the frontend uses the ID from the API response.
        title: route.title,
        location: route.location,
        difficulty: route.difficulty,
        distance: route.distance,
        duration: route.duration,
        days: days,
        cover_image: route.image,
        tags: route.tags, // JSONB handles array automatically
        description: route.desc,
        full_desc: route.fullDesc,
        altitude: route.altitude,
        best_season: route.bestSeason,
        gear: route.gear,
        itinerary: route.itinerary,
        price: 0.00, // Default
        category: route.category || 'hiking',
        scenic_spots: route.scenicSpots || [],
        created_at: new Date(),
        updated_at: new Date()
    };
});

async function importRoutes() {
    console.log('Starting import...');
    
    // Clear existing data
    const { error: deleteError } = await supabase
        .from('scenic_routes')
        .delete()
        .neq('id', 0); // Delete all rows

    if (deleteError) {
        console.error('Error clearing table:', deleteError);
        return;
    }
    console.log('Table cleared.');

    // Insert data
    const { data, error } = await supabase
        .from('scenic_routes')
        .insert(transformedRoutes)
        .select();

    if (error) {
        console.error('Error inserting routes:', error);
    } else {
        console.log(`Successfully imported ${data.length} routes.`);
    }
}

importRoutes();
