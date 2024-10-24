docker-compose down 
if [ "$1" = "--build" ]
then 
    docker-compose up -d --build
else 
    docker-compose up -d
fi

sh ssh-to-app.sh 