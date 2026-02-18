
const assert = require('assert');

const API_URL = 'https://dojjyarpayutgwwvyvho.supabase.co/functions/v1/scenic-routes-v3';

async function testApi() {
    console.log('Starting API Tests...');
    const start = Date.now();

    try {
        // Test 1: Basic Fetch
        console.log('Test 1: Basic Fetch (limit=6)...');
        const res1 = await fetch(`${API_URL}?limit=6`);
        assert.strictEqual(res1.status, 200, 'Status should be 200');
        const json1 = await res1.json();
        assert.strictEqual(json1.code, 0, 'Code should be 0');
        assert(Array.isArray(json1.data), 'Data should be an array');
        assert(json1.data.length <= 6, 'Data length should be <= 6');
        console.log('  Passed!');

        // Test 2: Data Structure
        console.log('Test 2: Data Structure...');
        if (json1.data.length > 0) {
            const item = json1.data[0];
            assert(item.id, 'Item should have id');
            assert(item.title, 'Item should have title');
            assert(item.cover_image, 'Item should have cover_image');
            // Check image URL format
            assert(item.cover_image.startsWith('http'), 'cover_image should start with http');
        } else {
            console.warn('  Skipped structure check (no data)');
        }
        console.log('  Passed!');

        // Test 3: Limit Validation
        console.log('Test 3: Limit Validation...');
        // Limit > 50 -> should be capped at 50
        const res2 = await fetch(`${API_URL}?limit=100`);
        const json2 = await res2.json();
        assert(json2.data.length <= 50, 'Limit should be capped at 50');
        
        // Limit < 1 -> should be default to 1? Or handled? My code sets min 1.
        const res3 = await fetch(`${API_URL}?limit=-5`);
        const json3 = await res3.json();
        assert(json3.data.length >= 1, 'Limit should be at least 1');
        console.log('  Passed!');

        // Test 4: Performance (Concurrent Requests)
        console.log('Test 4: Performance (100 Concurrent Requests)...');
        const requests = [];
        const numRequests = 100;
        const perfStart = Date.now();
        
        for (let i = 0; i < numRequests; i++) {
            requests.push(fetch(`${API_URL}?limit=6`));
        }
        
        const responses = await Promise.all(requests);
        const perfEnd = Date.now();
        const duration = perfEnd - perfStart;
        const avg = duration / numRequests; // This is naive, but okay for a rough check
        
        // Check success rate
        const successCount = responses.filter(r => r.status === 200).length;
        assert.strictEqual(successCount, numRequests, 'All requests should succeed');
        
        console.log(`  Passed! 100 requests in ${duration}ms. Avg (naive): ${avg}ms/req.`);
        console.log(`  Real concurrent throughput: ${numRequests / (duration/1000)} req/s`);

    } catch (error) {
        console.error('Test Failed:', error);
        process.exit(1);
    }

    const end = Date.now();
    console.log(`All Tests Passed in ${end - start}ms.`);
}

testApi();
