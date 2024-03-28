pipeline {
    agent any

    triggers {
            pollSCM('* * * * *')
        }
    stages {
        stage('Install') {
            steps {
                sh 'echo "install-test"'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "test"'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "build"'
            }
        }
    }
}