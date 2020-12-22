#!/bin/bash

docker-compose up 

docker exec -it nodeapp npm run

mkdir ./dist
docker cp application_node:/app/dist/* ./dist

docker-compose stop
