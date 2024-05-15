#!/bin/bash

# Run yarn migration:run
echo "Running yarn migration:run"
yarn migration:run

# Run yarn seed:run
echo "Running yarn seed:run"
yarn seed:run

# Run yarn start:build
echo "Running yarn build"
RUN yarn run build

# Run yarn start:dev
echo "Running yarn start:dev"
yarn start:dev
