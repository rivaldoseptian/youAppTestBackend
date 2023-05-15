import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  readonly passwordConfirm: string;
}
