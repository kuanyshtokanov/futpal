import { IsEnum, IsString, IsDate, IsDateString } from 'class-validator';

import { GameStatus } from '@consts/game.statuses';

export class CreateGameDto {
  @IsString()
  public name!: string;

  @IsString()
  public description!: string;

  @IsEnum(GameStatus)
  public status!: GameStatus;

  @IsDateString()
  public time!: string;

  @IsString()
  public createdBy?: string;
}