import express, { Express, Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;
const database = process.env.POSTGRES_DB!;
const db_user = process.env.POSTGRES_USER!;
const db_password = process.env.POSTGRES_PASSWORD!;

const sequelize = new Sequelize(database, db_user, db_password, {
  host: 'postgres',
  dialect: 'postgres',
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
(async () => {
  await sequelize.authenticate();
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})().catch((err) => {
  console.error('Unable to connect to the database:', err);
  sequelize.close();
});
