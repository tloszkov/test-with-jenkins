pipeline {
    agent any

    triggers {
            pollSCM('10 * * * *')
        }
    stages {
        stage('Install') {
            steps {
                sh 'echo "install-test1"'
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