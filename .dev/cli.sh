#!/bin/sh

docker compose exec node sh -c 'printf "\nYou should now be inside the Node.js container. You can run commands such as \"npm update\".\nType exit to quit.\n\n"; sh'
