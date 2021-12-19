import { Router } from 'express';
import GamesController from '@controllers/games.controller';
import { CreateGameDto } from '@dtos/games.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class GamesRoute implements Routes {
  public path = '/games';
  public router = Router();
  public gamesController = new GamesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.gamesController.getGames);
    this.router.get(`${this.path}/:id`, this.gamesController.getGameById);
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateGameDto, 'body'),
      authMiddleware,
      this.gamesController.createGame
    );
  }
}

export default GamesRoute;
