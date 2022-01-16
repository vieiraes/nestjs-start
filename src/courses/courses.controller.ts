import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { CoursesService } from './courses.service';

// ROTA /courses
@Controller('courses')
export class CoursesController {
  ///==========================método construtor para ler o service.ts
  constructor(private readonly _coursesService: CoursesService) {}

  ///================================

  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  findAll(response) {
    return `Listagem correta`;
    // return response.send('listagem dos cursos').status();
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso numero ${id}`;
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post()
  create(@Body() body) {
    return body;
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':id')
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
