#!/usr/bin/groovy
pipeline {
  agent any
  options {
    disableConcurrentBuilds()
  }
  stages {
    stage("Build") {
      steps {
        echo "Building .."
      }
    }
    stage("Test") {
      steps {
        echo "Testing .."
      }
    }
    stage("Deploy") {
      steps {
        echo "Deploying .."
      }
    }
  }
}
