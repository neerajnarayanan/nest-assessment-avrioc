import { Module } from '@nestjs/common';
import { Comments, CommentsSchema } from '../schemas/comments.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: Comments.name, schema: CommentsSchema }]),
    ],
    exports: [MongooseModule],
    providers: [CommentsService],
    controllers: [CommentsController],
  })
export class CommentsModule {}
