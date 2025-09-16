# mongodb exempel med express

Exempel med express och mongodb.

De slides som visade under tillfället (250916) finns i ```slides```-mappen.

## .env

Exempel på .env

```bash
# atlas
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster_name>.mgd2ede.mongodb.net/<collection_name>?retryWrites=true&w=majority&appName=<Cluster_name>
DATABASE_NAME=courses
COLLECTION_NAME=courses_data

# docker
# MONGODB_URI=mongodb://<username>:<password>@localhost:<port>/<database_name>?authSource=admin
# DATABASE_NAME=courses
# COLLECTION_NAME=courses

PORT=3000
```

## routes/endpoints

- `GET /api/courses`
- `GET /api/courses/:id`
- `POST /api/courses`
- `PUT /api/courses/:id`
- `DELETE /api/courses/:id`

## några curl exempel: 

```bash
# visa alla courses
curl http://localhost:3000/api/courses

# skapa course
curl -X POST http://localhost:3000/api/courses -H "Content-Type: application/json" -d '{"courseCode":"TEST001","courseName":"Test Course","points":5}'
```

## exempel på en docker-compose.yml:
```yml
services:
    mongodb:
        image: mongo:latest
        container_name: mongodb
        ports:
            - '27017:27017' # this is the default port
        environment:
            MONGO_INITDB_ROOT_USERNAME: <user_name>
            MONGO_INITDB_ROOT_PASSWORD: <password>
        volumes:
            # path for perstiance
            - /Users/mattische/Dev/docker/mongodb-kursredan/data:/data/db

volumes:
    mongodbdata:
```

```bash
$ docker compose up -d
```  
