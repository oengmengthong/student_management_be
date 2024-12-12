import express, { Application } from 'express';
import v1Routes from './routes/v1';
import { errorHandler, notFoundHandler } from './app/middlewares/errorHandler';
import cors from 'cors';
import os from 'os';
import formData from 'express-form-data';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const options = {
    uploadDir: os.tmpdir(),
    autoClean: true,
  };

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

app.use(formData.parse(options));

// Routes
app.use('/api/v1', v1Routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;