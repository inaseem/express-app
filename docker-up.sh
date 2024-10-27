DOCKER_DEFAULT_PLATFORM=linux/amd64 docker-compose down 
if [ "$1" = "--build" ]
then 
    DOCKER_DEFAULT_PLATFORM=linux/amd64 docker-compose up -d --build
else 
    DOCKER_DEFAULT_PLATFORM=linux/amd64 docker-compose up
fi

sh ssh-to-app.sh 