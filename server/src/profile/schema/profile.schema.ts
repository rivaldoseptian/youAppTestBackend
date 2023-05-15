import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../user/schema/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop()
  displayName: string;

  @Prop()
  gender: string;

  @Prop()
  birthday: string;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
