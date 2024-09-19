pipeline {
    agent any

    environment {
        NODE_VERSION = 'nodejs-lts' // NodeJS version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/lazantha/react_front_end.git', credentialsId: 'github-pat'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp -r build/* /path/to/your/deployment/directory/'
            }
        }
    }

    post {
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
