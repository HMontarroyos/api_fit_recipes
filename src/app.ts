import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { RecipeRoutes } from './routes';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes() {
    const recipeRoutes = new RecipeRoutes();

    this.app.use('/recipes', recipeRoutes.router);
  }
}
