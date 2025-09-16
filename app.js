import express from 'express';
import { connectDB } from './database.js';
import routes from './routes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Simple mongodb api' });
});

// Start server
const startServer = async () => {
  await connectDB();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`process.env.MONGODB_URI:  ${process.env.MONGODB_URI} `);
  });
};

startServer();