import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { beforeAll, afterAll } from '@jest/globals';

dotenv.config();

beforeAll(async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for testing');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
});

afterAll(async () => {
  try {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
});

