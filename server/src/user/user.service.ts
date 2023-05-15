import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { User } from './schema/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';
import { RegisterDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async register(registerDto: RegisterDto): Promise<{ token: string }> {
    const { email, username, password, passwordConfirm } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      email,
      username,
      password: hashedPassword,
      passwordConfirm,
    });

    const token = this.jwtService.sign({
      id: user._id,
    });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email / password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email / password');
    }

    const token = this.jwtService.sign({
      id: user._id,
    });

    return { token };
  }
}
