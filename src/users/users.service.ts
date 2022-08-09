import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) { }
    
    async findAll(): Promise<User[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return await this.model.findById(id).exec();
    }
    async create(createTodoDto: any): Promise<User> {
        return await new this.model({
            ...createTodoDto,
            createdAt: new Date(),
        }).save();
    }
}
