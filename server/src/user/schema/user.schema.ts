import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
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
