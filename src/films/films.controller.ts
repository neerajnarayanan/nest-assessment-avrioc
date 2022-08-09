import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
    constructor(private readonly service: FilmsService) {}

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
