import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db;

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db(process.env.DATABASE_NAME);
    console.log('connected to db');
  } 
  catch (error) {
    console.error('connection failedd:', error);
    process.exit(1);
  }
};

const getDB = () => db;

export { connectDB, getDB };
