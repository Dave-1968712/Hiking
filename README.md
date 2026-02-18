# Trae Scenic Routes Refactoring Project

This project refactors the "Featured Routes" (精选线路) module in `index.html` to fetch data dynamically from a Supabase database.

## Prerequisites

- Node.js (v18+)
- Supabase CLI (optional, for local development)
- Docker (optional, for integration testing)

## Setup

1.  **Clone Repository**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory:
    ```env
    SUPABASE_URL=your_supabase_project_url
    SUPABASE_KEY=your_supabase_service_role_key  # Use service_role key for import script
    SUPABASE_ANON_KEY=your_supabase_anon_key    # Use anon key for frontend/edge functions
    ```

## Database Initialization

1.  **Create Table & Policies**
    Execute the SQL commands in `schema.sql` using the Supabase Dashboard SQL Editor or CLI:
    ```bash
    psql -h db.project_ref.supabase.co -U postgres -f schema.sql
    ```

2.  **Import Data**
    Run the import script to populate the `scenic_routes` table with initial data extracted from `index.html`:
    ```bash
    node scripts/import_routes.js
    ```
    This script will clear existing data and insert the 9 featured routes.

## Backend Development (Supabase Edge Functions)

The backend logic resides in `functions/scenic-routes`.

-   **Deploy Function**
    ```bash
    supabase functions deploy scenic-routes-v3 --no-verify-jwt
    ```
    Ensure you set the environment variables in Supabase Dashboard for the function if needed (though it uses standard Supabase env vars).

-   **API Endpoint**
    `GET https://<project-ref>.supabase.co/functions/v1/scenic-routes-v3`
    -   Query Params: `limit` (default 6, max 50), `offset` (default 0).
    -   Returns: JSON object with `code: 0` and `data: [...]`.

## Frontend Refactoring

The `index.html` has been updated to:
-   Remove hardcoded route data.
-   Fetch data from the API on load.
-   Show skeleton loading state.
-   Handle errors gracefully.
-   Support filtering (client-side) using the fetched data.

## Testing

1.  **Unit & Performance Tests**
    Run the API test suite:
    ```bash
    node tests/test_api.js
    ```
    Verifies:
    -   Basic fetch functionality.
    -   Data structure and limit validation.
    -   Performance (100 concurrent requests).

2.  **Integration Test**
    Run the end-to-end integration test (requires Docker for full check):
    ```bash
    chmod +x tests/integration_test.sh
    ./tests/integration_test.sh
    ```
    Steps performed:
    -   Clears and re-imports data.
    -   Checks API response.
    -   Builds and runs a Docker container serving the frontend.
    -   Verifies the frontend is serving correctly.

## Deployment

1.  **Backend**: Deploy the Edge Function as described above.
2.  **Frontend**: Deploy the static files (`index.html`, `assets/`, etc.) to any static hosting provider (Vercel, Netlify, GitHub Pages, or Nginx).

## Rollback

If issues occur:
1.  **Database**: Restore from backup or re-run `schema.sql` (if schema changed) and `node scripts/import_routes.js` to reset data.
2.  **Frontend**: Revert `index.html` to the previous version in Git.
3.  **Backend**: Redeploy the previous version of the Edge Function using Supabase CLI.
