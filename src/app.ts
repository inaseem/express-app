import dotenv from 'dotenv';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import authRoutesV1 from './routes/authRoute';
import Config from './config';

dotenv.config();
Config.initialize();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(express.json()); // for parsing body in JSON format

app.use(express.static('../public')); // making the public directory static

// Auth routes
app.use('/api/v1', authRoutesV1);

(async function () {
  await mongoose.connect(process.env.MONGO_DB_URI);
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})();
