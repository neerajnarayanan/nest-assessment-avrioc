import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly service: UsersService) {}

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
}
