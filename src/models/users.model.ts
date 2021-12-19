import { model, Schema, Document } from 'mongoose';

import { Roles } from '@consts/roles.consts';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum : Roles,
      default: Roles.GAME_ORGANIZER
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    }
  }
);

const userModel = model<User & Document>('users', userSchema);

export default userModel;
