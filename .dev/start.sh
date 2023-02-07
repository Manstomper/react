#!/bin/sh

if [[ $(docker compose ps -q node 2>&1) =~ "no such service" ]]; then
    echo "Container does not appear to exist. Building and starting..."

    docker compose up -d \
        && docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm install && npm run dev" \
        && docker compose restart node
else
    echo "Container appears to exist. Restarting..."

    docker compose restart node \
        && docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node npm run dev
fi
