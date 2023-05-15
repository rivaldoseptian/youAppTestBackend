import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  static register(arg0: {
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
    name: string;
  }) {
    throw new Error('Method not implemented.');
  }
  @Prop({ unique: [true, 'Email already used'] })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  passwordConfirm: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
