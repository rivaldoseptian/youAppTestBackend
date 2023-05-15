import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Profile } from './schema/profile.schema';
import { ProfileService } from './profile.service';
import { ProfileDto } from './dto/create-user.dto';

@Controller('api')
export class ProfileController {
  constructor(private profileservice: ProfileService) {}

  // @Get()
  // @UseGuards(AuthGuard())
  // async getProfile(
  //     @Req() req
  // ):Promise<Profile>{
  //     return this.profileservice.findProfile(req.user)
  // }

  @Post('/createProfile')
  @UseGuards(AuthGuard())
  async createProfile(
    @Body()
    profile: ProfileDto,
    @Req() req,
  ): Promise<Profile> {
    console.log(req.user);
    return this.profileservice.create(profile, req.user);
  }
}
