pipeline {
    agent any

    // Define environment variables if needed
    environment {
        NODE_VERSION = 'nodejs-lts' // Ensure this is installed on Jenkins (configured via Jenkins UI)
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your source control (Git, for example)
                git branch: 'main', url: 'https://github.com/your-repo/your-react-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests if applicable
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm test' // Adjust based on your test command (e.g., `npm run test`)
                    }
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React app for production
                script {
                    nodejs(NODE_VERSION) {
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Optionally, deploy your build files (this can be deploying to a server, copying to S3, etc.)
                // Example for copying the build to a web server directory
                script {
                    sh 'cp -r build/* /path/to/your/server/directory/'
                }
            }
        }
    }

    post {
        // Notifications on success or failure
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
