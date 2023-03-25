pipeline {
  agent any
  stages {
<<<<<<< HEAD
    stage('Verifing docker') {
      step: {
      sh '''
          docker version
          docker info
          docker compose version
=======
    stage('Verifying docker') {
      steps {
        sh '''
          docker version
          docker info
          docker-compose version
>>>>>>> ab06b5b (updated jenkins file)
          curl --version
          jq --version
        '''
      }
    }

<<<<<<< HEAD
    stage('Prune docker verifing') {
      step: {
      sh '''
=======
    stage('Prune docker verifying') {
      steps {
        sh '''
>>>>>>> ab06b5b (updated jenkins file)
          docker system prune -a --volumes -f
        '''
      }
    }

    stage('Starting docker compose') {
<<<<<<< HEAD
      step: {
      sh 'docker compose up -d --no-color --await'
      sh 'docker compose ps'
=======
      steps {
        sh 'docker-compose up -d --no-color --await'
        sh 'docker-compose ps'
>>>>>>> ab06b5b (updated jenkins file)
      }
    }
  }

  post {
    always {
<<<<<<< HEAD
      sh 'docker compose down --remove-orphans -v'
=======
      sh 'docker-compose down --remove-orphans -v'
>>>>>>> ab06b5b (updated jenkins file)
    }
  }
}
