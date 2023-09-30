import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { TodoInterface, TodosService } from 'src/todo/service/todo.service';
import { TodoDto } from '../model/todo.dto';

@ApiTags('todo')
@Controller('todo')
export class TodosController {

constructor(private todosService: TodosService) {}

@Post()
  async create(@Body() createTodoDto: TodoDto) {
    const todo = await this.todosService.create(createTodoDto);
    if(!todo) {
      return 'error in creating todo'
    }
    return 'todo created successfully'
  }

@Get()
  async findAll(@Req() request: Request) {
    const cats: Array<TodoInterface> = await this.todosService.findAll()
    return cats
  }

@Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newCat: any = await this.todosService.update(id, body)
    return "cat updated";
  }

@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todosService.delete(id)
    return "cat deleted"
  }
}