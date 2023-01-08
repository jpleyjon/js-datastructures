pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Unit Tests') {
      steps {
        sh 'chmod +x ./do'
        sh 'chmod 755 ./do'
        sh './do test'
      }
    }
  }
}
