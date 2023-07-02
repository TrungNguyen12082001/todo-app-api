import express, { Express } from 'express';

import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Task } from './src/tasks/tasks.entity';
import { tasksRouter } from './src/tasks/tasks.router';

// Instantiate express app
const app: Express = express();
dotenv.config();

// Parse request Body
app.use(bodyParser.json()); // Our request body would be attached to out incoming request as a body property and body parser will also process the incoming JSON and convert it to a JavaScript object. So we would be able to use request body as a JavaScript object

// Use CORS install types as well
app.use(cors()); // 17 + 20 -> able to streamline the incoming request

// Create Database Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

// Define server port
const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    // Start listening to the requests on the defined port
    app.listen(port);
    console.log('Data Source has been initialized');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });

app.use('/', tasksRouter);
