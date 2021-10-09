#!/bin/bash

cd $(dirname $(realpath $0))
cd ../../

eval $(minikube docker-env)

docker-compose build --parallel theia-xv6
