import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
