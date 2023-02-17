#!/bin/sh

if [[ -z $(docker compose ps -q node 2>&1) ]]; then
    docker compose start
fi

docker compose exec node sh -c 'printf "\nYou should now be inside the Node.js container. You can run commands such as \"npm update\".\nType exit to quit.\n\n"; sh'
