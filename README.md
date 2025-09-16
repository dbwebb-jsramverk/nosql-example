# mongodb exempel med express

Exempel med express och mongodb.


## .env

Exempel på .env

```bash
# atlas
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mgd2ede.mongodb.net/courses?retryWrites=true&w=majority&appName=Cluster0
DATABASE_NAME=courses
COLLECTION_NAME=courses_data

# docker
# MONGODB_URI=mongodb://<username>:<password>@localhost:27017/courses?authSource=admin
# DATABASE_NAME=courses
# COLLECTION_NAME=courses

PORT=3000
```

## routes/endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course


## några curl exempel:

```bash
# Get all courses
curl http://localhost:3000/api/courses

# Create course
curl -X POST http://localhost:3000/api/courses \
  -H "Content-Type: application/json" \
  -d '{"code":"TEST001","name":"Test Course","credits":5}'
```
