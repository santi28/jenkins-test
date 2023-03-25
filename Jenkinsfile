pipeline {
  agent any
  stages {
    stage('Verifing docker') {
      step: {
      sh '''
          docker version
          docker info
          docker compose version
          curl --version
          jq --version
        '''
      }
    }

    stage('Prune docker verifing') {
      step: {
      sh '''
          docker system prune -a --volumes -f
        '''
      }
    }

    stage('Starting docker compose') {
      step: {
      sh 'docker compose up -d --no-color --await'
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
