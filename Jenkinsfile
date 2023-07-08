node {

    def app

    stage('Clone Project Repository') {
        checkout scm
    }

    stage('Build Docker Image') {
        app = docker.build("falling")
    }

    stage('Test Docker Image') {
        app.inside {
            sh 'echo "No tests; passed all."'
        }
    }
}