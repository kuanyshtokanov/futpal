import { NextFunction, Request, Response } from 'express';
import { CreateGameDto } from '@dtos/games.dto';
import { Game } from '@interfaces/games.interface';
import gameService from '@services/games.service';

class GamesController {
  public gameService = new gameService();

  public getGames = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: Game[] = await this.gameService.findAllGames();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getGameById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const gameId: string = req.params.id;
      const findOneGameData: Game = await this.gameService.findGameById(gameId);

      res.status(200).json({ data: findOneGameData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createGame = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const gameData: CreateGameDto = req.body;

      const createGameData: Game = await this.gameService.createGame(gameData);

      res.status(201).json({ data: createGameData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default GamesController;
