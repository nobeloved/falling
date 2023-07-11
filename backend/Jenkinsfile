#!/usr/bin/env groovy

pipeline {
    
    agent any

    stages {

        stage('Build') {
            steps {
                script {
                    app = docker.build("nullstatic/falling")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    app.inside {
                        sh 'echo "No tests; passed all."'
                    }
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    withDockerRegistry([ credentialsId: "docker", url: "" ]) {
                        app.push()
                    }
                }
            }
        }
    }
}