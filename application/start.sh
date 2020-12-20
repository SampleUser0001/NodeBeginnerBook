#!/bin/bash

cd /app

npm init -y
npm install -y formidable

cat package.json

npm install

node ./src/index.js
