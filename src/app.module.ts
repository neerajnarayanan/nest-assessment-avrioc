import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmsModule } from './films/films.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    FilmsModule,
    UsersModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
