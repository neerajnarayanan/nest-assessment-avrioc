import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film, FilmDocument } from '../schemas/films.schema';

@Injectable()
export class FilmsService {
    constructor(@InjectModel(Film.name) private readonly model: Model<FilmDocument>) {

    }

    async findAll(): Promise<Film[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Film> {
        return await this.model.findById(id).exec();
    }
    async create(createTodoDto: any): Promise<Film> {
        return await new this.model({
            ...createTodoDto,
            createdAt: new Date(),
        }).save();
    }
}
