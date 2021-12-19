import bcrypt from 'bcrypt';
import { CreateGameDto } from '@dtos/games.dto';
import { HttpException } from '@exceptions/HttpException';
import { Game } from '@interfaces/games.interface';
import gameModel from '@models/games.model';
import { isEmpty } from '@utils/util';

class GameService {
  public games = gameModel;

  public async findAllGames(): Promise<Game[]> {
    const games: Game[] = await this.games.find();
    return games;
  }

  public async findGameById(gameId: string): Promise<Game> {
    if (isEmpty(gameId)) throw new HttpException(400, "gameId not provided");

    const findGame: Game | null = await this.games.findOne({ _id: gameId });
    if (!findGame) throw new HttpException(409, "Game not found");

    return findGame;
  }

  public async createGame(gameData: CreateGameDto): Promise<Game> {
    if (isEmpty(gameData)) throw new HttpException(400, "gameData not provided");

    const findGame: Game | null = await this.games.findOne({ name: gameData.name, time: gameData.time });
    if (findGame) throw new HttpException(409, `Game with this name ${gameData.name} and for this time ${gameData.time} already exists`);

    const createGameData: Game = await this.games.create({ ...gameData });

    return createGameData;
  }
}

export default GameService;
