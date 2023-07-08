node {

    def app

    stage('Clone Project Repository') {
        checkout scm
    }

    stage('Build Docker Image') {
        app = docker.build("nullstatic/falling:latest")
    }

    stage('Test Docker Image') {
        app.inside {
            sh 'echo "No tests; passed all."'
        }
    }

    stage('Push Docker Image') {
        withDockerRegistry([ credentialsId: "docker", url: "" ]) {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}