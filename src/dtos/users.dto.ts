import { IsEmail, IsString, IsEnum } from 'class-validator';

import { Roles } from '@consts/roles.consts';

export class CreateUserDto {
  @IsEmail()
  public email!: string;

  @IsString()
  public password!: string;

  @IsEnum(Roles)
  public role!: Roles;
}

export class LoginUserDto {
  @IsEmail()
  public email!: string;

  @IsString()
  public password!: string;
}
