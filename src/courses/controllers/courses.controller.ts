import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { CoursesService } from '../providers/courses.service'


@Controller('courses')
export class CoursesController {
  ///==================== abaixo método construtor para ler o service.ts
  constructor(private readonly _coursesService: CoursesService) {}
  ///================================

  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  findAll() {
    return this._coursesService.findAll();
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Get(':id')
  findOne(@Param('id') id) {
    return this._coursesService.findOne(id);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post()
  create(@Body() body) {
    return this._coursesService.createNewCourse(body); 
  }
 
  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':id')
  patch(@Param('id') id: string, @Body() body) {
    return this._coursesService.updateOneCourse(id, body);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this._coursesService.deleteOneCourse(id);
  
  }
}
