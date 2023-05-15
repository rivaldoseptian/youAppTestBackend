import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './schema/profile.schema';
import * as mongoose from 'mongoose';
import { User } from '../user/schema/user.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: mongoose.Model<Profile>,
  ) {}

  async findProfile(userId: string): Promise<Profile> {
    const profile = await this.profileModel.findOne({ user: userId }).exec();
    return profile;
  }

  async create(profile: Profile, user: User): Promise<Profile> {
    const data = Object.assign(profile, { user: user._id });

    const res = await this.profileModel.create(data);
    return res;
  }

  async Update(userId: string, profile: Profile): Promise<Profile> {
    const updatedProfile = await this.profileModel.findOneAndUpdate(
      { user: userId },
      profile,
      { new: true },
    );
    return updatedProfile;
  }
}
