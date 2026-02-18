const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Mock Data
const MOCK_ROUTES = [
    {
        id: 1,
        title: "Test Route 1",
        image: "https://example.com/img1.jpg",
        location: "Test Location 1",
        difficulty: "easy",
        distance: "10km",
        duration: "1 day",
        desc: "Description 1",
        tags: ["tag1"],
        category: "hiking",
        updated_at: "2023-01-01"
    },
    {
        id: 2,
        title: "Test Route 2",
        image: "https://example.com/img2.jpg",
        location: "Test Location 2",
        difficulty: "hard",
        distance: "20km",
        duration: "2 days",
        desc: "Description 2",
        tags: ["tag2"],
        category: "photography",
        updated_at: "2023-01-02"
    }
];

async function runFrontendTests() {
    console.log("Starting Frontend Logic Tests...");
    
    // 1. Load HTML
    const htmlPath = path.resolve(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // 2. Setup JSDOM
    const dom = new JSDOM(htmlContent, {
        runScripts: "dangerously",
        resources: "usable",
        url: "http://localhost/",
        beforeParse(window) {
            // Mock fetch
            window.fetch = async (url) => {
                console.log(`[Mock Fetch] Request to: ${url}`);
                if (url.includes('scenic-routes')) {
                    return {
                        ok: true,
                        json: async () => ({
                            code: 0,
                            msg: "ok",
                            data: MOCK_ROUTES
                        })
                    };
                }
                return { ok: false };
            };

            // Mock lucide
            window.lucide = {
                createIcons: () => {
                    // console.log("[Mock Lucide] Icons created");
                }
            };
            
            // Mock console.error to catch errors
            window.console.error = (msg) => {
                // console.log("[Console Error]", msg); 
            };
        }
    });

    const { window } = dom;
    const document = window.document;

    // Wait for DOMContentLoaded and async fetch
    await new Promise(resolve => {
        window.addEventListener('DOMContentLoaded', () => {
            // Allow some time for fetch and render
            setTimeout(resolve, 100);
        });
    });

    // Run Tests
    let passed = 0;
    let total = 0;

    function assert(condition, message) {
        total++;
        if (condition) {
            console.log(`✅ PASS: ${message}`);
            passed++;
        } else {
            console.error(`❌ FAIL: ${message}`);
        }
    }

    console.log("\n--- Test Suite: Route Rendering ---");

    // Test 1: Check if routes are rendered
    const grid = document.getElementById('routes-grid');
    const cards = grid.querySelectorAll('.group'); // The cards have 'group' class
    assert(cards.length === 2, `Should render 2 cards, found ${cards.length}`);

    // Test 2: Check content of first card
    if (cards.length > 0) {
        const firstCard = cards[0];
        const title = firstCard.querySelector('h3').textContent;
        const location = firstCard.querySelector('.text-muted-foreground').textContent;
        
        assert(title === "Test Route 1", `First card title should be "Test Route 1", got "${title}"`);
        assert(location.includes("Test Location 1"), `First card location should contain "Test Location 1"`);
    }

    // Test 3: Filter Logic (Call the function directly from window)
    console.log("\n--- Test Suite: Filtering ---");
    
    // Test Easy Filter
    if (window.renderRoutes) {
        window.renderRoutes('easy');
        const easyCards = grid.querySelectorAll('.group');
        assert(easyCards.length === 1, `Filter 'easy' should show 1 card, found ${easyCards.length}`);
        if (easyCards.length > 0) {
            assert(easyCards[0].querySelector('h3').textContent === "Test Route 1", "Filtered card should be Route 1");
        }

        // Test Hard Filter
        window.renderRoutes('hard');
        const hardCards = grid.querySelectorAll('.group');
        assert(hardCards.length === 1, `Filter 'hard' should show 1 card, found ${hardCards.length}`);
        if (hardCards.length > 0) {
            assert(hardCards[0].querySelector('h3').textContent === "Test Route 2", "Filtered card should be Route 2");
        }

        // Test All Filter
        window.renderRoutes('all');
        const allCards = grid.querySelectorAll('.group');
        assert(allCards.length === 2, `Filter 'all' should show 2 cards, found ${allCards.length}`);
    } else {
        console.error("❌ FAIL: window.renderRoutes is not available");
        total++;
    }

    // Summary
    console.log(`\nTests Completed: ${passed}/${total} Passed`);
    
    if (passed === total) {
        console.log("Frontend Logic Tests Passed Successfully!");
        process.exit(0);
    } else {
        console.error("Some tests failed.");
        process.exit(1);
    }
}

runFrontendTests().catch(err => {
    console.error("Test execution failed:", err);
    process.exit(1);
});
