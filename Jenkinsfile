#!/usr/bin/groovy
pipeline {
  agent any
  options {
   disableConcurrentBuilds()
  }
  stages {
   stage("Build") {
    echo "Building .."
   }
   stage("Test") {
    echo "Testing .."
   }
   stage("Deploy") {
    echo "Deploying .."
   }
  }
}
