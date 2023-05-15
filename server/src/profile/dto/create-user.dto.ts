import { IsString, IsNumber, IsEmpty } from 'class-validator';
import { User } from '../../user/schema/user.schema';
import { Transform } from 'class-transformer';

export class ProfileDto {
  @IsString()
  readonly displayName: string;

  @IsString()
  readonly gender: string;

  readonly birthday: string;

  @IsString()
  readonly horoscope: string;

  @IsString()
  readonly zodiac: string;

  @IsNumber()
  readonly height: number;

  @IsNumber()
  readonly weight: number;

  @IsEmpty({ message: 'You cannot Pass UserId' })
  readonly user: User;

  @Transform(({ value }) =>
    value.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  )
  get formattedBirthday(): string {
    return this.birthday;
  }
}
