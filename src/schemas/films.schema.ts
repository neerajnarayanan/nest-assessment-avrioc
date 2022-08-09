import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilmDocument = Film & Document;
@Schema()
export class Film {

  @Prop()
  name?: string;

  @Prop()
  description?: string;

  @Prop()
  release_date?: Date;

  @Prop()
  rating?: number;

  @Prop()
  review: string;

  @Prop()
  country: string;

  @Prop()
  genre: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt: Date;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
