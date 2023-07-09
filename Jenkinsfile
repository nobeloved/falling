#!/usr/bin/env groovy

pipeline {
    
    agent any

    stages {

        stage('Build') {
            app = docker.build("nullstatic/falling")
        }

        stage('Test') {
            app.inside {
                sh 'echo "No tests; passed all."'
            }
        }

        stage('Push') {
            withDockerRegistry([ credentialsId: "docker", url: "" ]) {
                app.push()
            }
        }
    }
}