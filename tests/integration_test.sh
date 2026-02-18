#!/bin/bash
set -e

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

echo "--- Step 1: Data Import & API Check ---"

# Run Import Script (This clears the table and re-imports)
echo "Running data import..."
node scripts/import_routes.js

# Check API
API_URL="https://dojjyarpayutgwwvyvho.supabase.co/functions/v1/scenic-routes-v3"
echo "Checking API at $API_URL?limit=6..."

RESPONSE=$(curl -s "$API_URL?limit=6")

# Validate Response
if echo "$RESPONSE" | grep -q '"code":0'; then
  echo "API Check Passed: Response contains 'code:0'"
  
  # Check if data array has length > 0
  COUNT=$(echo "$RESPONSE" | grep -o '"id":' | wc -l)
  echo "Found $COUNT routes in response."
  
  if [ "$COUNT" -gt 0 ]; then
      echo "Data validation passed!"
  else
      echo "Data validation failed: No routes found!"
      exit 1
  fi
else
  echo "API Check Failed: $RESPONSE"
  exit 1
fi

echo "--- Step 2: Docker Environment Verification ---"

if command -v docker &> /dev/null; then
    echo "Docker found. Building and running container..."
    
    # Build Image
    docker build -t trae-test-frontend .
    
    # Run Container
    # Stop existing if any
    docker rm -f trae-test-app 2>/dev/null || true
    docker run -d -p 8080:80 --name trae-test-app trae-test-frontend
    
    echo "Container started on port 8080."
    echo "Waiting for Nginx..."
    sleep 2
    
    # Verify Frontend
    FRONTEND_RESP=$(curl -s http://localhost:8080)
    if echo "$FRONTEND_RESP" | grep -q "精选线路"; then
        echo "Frontend Verification Passed: index.html served correctly."
    else
        echo "Frontend Verification Failed!"
        docker logs trae-test-app
        exit 1
    fi
    
    # Cleanup
    docker rm -f trae-test-app
    echo "Docker environment cleaned up."
else
    echo "Docker not found. Skipping Step 2."
    echo "To run full integration test, please install Docker."
fi

echo "Integration Test Completed Successfully!"
