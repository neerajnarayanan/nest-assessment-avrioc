import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query
  } from '@nestjs/common';

import { CommentsService } from './comments.service';
@Controller('comments')
export class CommentsController {
    constructor(private readonly service: CommentsService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
    
    @Post()
    async create(@Body() createTodoDto: any) {
      return await this.service.create(createTodoDto);
    }

    @Post('/add')
    async addComments(@Body() createTodoDto: any) {
      return await this.service.create(createTodoDto);
    }
}
