pipeline {
  agent any
  stages {
    stage('Verifying docker') {
      steps {
        sh '''
          docker version
          docker info
          docker compose version
          curl --version
        '''
      }
    }

    stage('Prune docker verifying') {
      steps {
        sh '''
          docker system prune -a --volumes -f
        '''
      }
    }

    stage('Starting docker compose') {
      steps {
        sh 'docker compose up -d --no-color'
        sh 'docker compose ps'
      }
    }
  }

  post {
    always {
      sh 'docker compose down --remove-orphans -v'
    }
  }
}
