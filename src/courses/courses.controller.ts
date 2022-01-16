import { CoursesService } from "./courses.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';


// #TODO: criar novas rotas
// ROTA /courses
@Controller('courses')
export class CoursesController {
///==========================método construtor para ler o service.ts
constructor( private readonly _coursesService: CoursesService){}


///================================

  
  // @HttpCode(HttpStatus.ACCEPTED) 
  @Get()
  findAll(response) {
  return `Listagem correta`
  // return response.send('listagem dos cursos').status();
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso numero ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  patch(@Param('id') id: string, @Body() body) {
    return `Curso atualizado ${id}`;
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    // return `Listagem correta`
    return `Deleção do item ${id}`;
  }
}
