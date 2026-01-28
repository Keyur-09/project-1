#!/bin/bash

echo "Stopping old container..."
docker stop local_app || true

echo "Removing old container..."
docker rm local_app || true

echo "Building Docker image..."
docker build -t ci-demo-app:local .

echo "Starting new container..."
docker run -d \
  --name local_app \
  -p 9800:9800 \
  ci-demo-app:local

echo "Deployment completed successfully!"
