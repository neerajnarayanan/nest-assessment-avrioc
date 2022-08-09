import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentsDocument = Comments & Document;
@Schema()
export class Comments {
  @Prop({ required: true })
  id: number;

  @Prop()
  film_id?: number;

  @Prop()
  comment?: string;

  @Prop()
  user_id?: number;

  @Prop()
  createdAt?: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
