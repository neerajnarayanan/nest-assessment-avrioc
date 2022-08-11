import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  name?: string;

  @Prop()
  description?: string;

  @Prop()
  isReviewer?: boolean;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
