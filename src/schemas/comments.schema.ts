import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type CommentsDocument = Comments & Document;
@Schema()
export class Comments {

  @Prop({required: true})
  film_id: [{
    type: ObjectId,
    ref: "films" // this name should be same as the model name specified while declaring model
}]

  @Prop()
  comment: string;

  @Prop({required: true})
  user_id: [{ type: ObjectId, ref: 'users' }]


  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
