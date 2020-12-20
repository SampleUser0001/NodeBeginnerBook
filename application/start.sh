#!/bin/bash

cd /app

npm init -y
npm install -y formidable

npm install

node ./src/index.js
