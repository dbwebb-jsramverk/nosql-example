# mongodb exempel med express

Exempel med express och mongodb.


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
