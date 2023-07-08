node {

    def app

    environment {
        DOCKER = credentials('docker')
    }

    stage('Clone Project Repository') {
        checkout scm
    }

    stage('Build Docker Image') {
        app = docker.build("falling")
    }

    stage('Test Docker Image') {
        sh 'echo $DOCKER_PSW | docker login -u $DOCKER_USR --password-stdin'
        app.inside {
            sh 'echo "No tests; passed all."'
        }
    }

    stage('Push Docker Image') {
        sh 'docker push falling'
    }
}