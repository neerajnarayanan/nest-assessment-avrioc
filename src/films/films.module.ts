import { Module } from '@nestjs/common';
import { Film, FilmSchema } from '../schemas/films.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
  ],
  exports: [MongooseModule],
  providers: [FilmsService],
  controllers: [FilmsController],
})
export class FilmsModule {}
