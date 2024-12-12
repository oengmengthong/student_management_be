import express, { Application } from 'express';
import v1Routes from './routes/v1';
import { errorHandler, notFoundHandler } from './app/middlewares/errorHandler';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to accept form data

// Routes
app.use('/api/v1', v1Routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;