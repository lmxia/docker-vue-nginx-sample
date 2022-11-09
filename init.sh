docker build -t "docker-vue-app" .

docker run -d --name "docker-vue-app" -p 8080:80 "docker-vue-app"
