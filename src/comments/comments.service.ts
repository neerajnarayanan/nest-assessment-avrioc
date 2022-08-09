import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments, CommentsDocument } from '../schemas/comments.schema';


@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comments.name) private readonly model: Model<Comments>) {}

    async findAll(): Promise<Comments[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Comments> {
        return await this.model.findById(id).exec();
    }
    async create(createTodoDto: any): Promise<Comments> {
        return await new this.model({
            ...createTodoDto,
            createdAt: new Date(),
        }).save();
    }
}
