import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

import { CoursesService } from '../services/courses.service';
import { CreateCourseDto } from '../classes/create-course.dto';
import { UpdateCourseDto } from '../classes/update-course.dto';

@Controller('courses')
export class CoursesController {
  ///==================== abaixo método construtor para ler o service.ts
  constructor(private readonly _coursesService: CoursesService) {}


  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  findAll() {
    return this._coursesService.findAll();
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Get(':id')
  findOne(@Param('id') id) {
    this._coursesService.findOne(id);
    return id
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post()
  create(@Body() createCourseDTO: CreateCourseDto) {
    this._coursesService.createNewCourse(createCourseDTO); 
    return createCourseDTO
  }
 
  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDto ) {
    var retorno = this._coursesService.updateOneCourse(id, updateCourseDTO);
    return retorno
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    this._coursesService.deleteOneCourse(id);
    return id
  
  }
}
