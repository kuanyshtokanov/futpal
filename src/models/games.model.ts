import { model, Schema, Document } from 'mongoose';

import { GameStatus } from '@consts/game.statuses';
import { Game } from '@interfaces/games.interface';

const gameSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum : GameStatus,
      default: GameStatus.ACTIVE
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    }
  }
);

const gameModel = model<Game & Document>('games', gameSchema);

export default gameModel;
