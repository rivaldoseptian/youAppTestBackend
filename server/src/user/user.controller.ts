import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { RegisterDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('api')
export class UserController {
  constructor(private userservice: UserService) {}

  @Post('/register')
  register(@Body() registerDto: RegisterDto): Promise<{ token: string }> {
    if (registerDto.password !== registerDto.passwordConfirm) {
      throw new BadRequestException('Password Not Match');
    }

    return this.userservice.register(registerDto);
  }

  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.userservice.login(loginDto);
  }
}
