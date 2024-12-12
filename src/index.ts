import { connectDB } from './database/connection';
import app from './server';
import dotenv from 'dotenv';

dotenv.config();

// Initialize database connection
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});