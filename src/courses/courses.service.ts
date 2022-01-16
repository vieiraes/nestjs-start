import { Injectable, Param } from '@nestjs/common';

import { enttCourse } from './entities/course.entity';

//controller é courses.controller.ts
// pra injetar um serviço num controller, precisa ir noarquivo de controller e aplicar o
@Injectable()
export class CoursesService {
  private var_dbcourses: enttCourse[] = [
    //registro em memoria dos cursos
    {
      id: 1,
      name: 'Fundamentos do Framwork NESTJS',
      description: 'Fundamentos do NESTJS',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
    {
      id: 2,
      name: 'Fundamentos do Alura',
      description: 'Fundamentos do Alura',
      tags: ['node.js', 'nestjs', 'javascript', 'alura'],
    },
    {
      id: 3,
      name: 'Fundamentos do Framwork NESTJS',
      description: 'Fundamentos do NESTJS',
      tags: ['noje.js', 'nestjs', 'javascript'],
    },

    //metodos que vao usar
  ];
  findAll() {
    return this.var_dbcourses; //o metodo findAll vai retornar tudo que eu tenho em minha variavel var_dbcourses,
    // var_dbcourses contem todos os regitros no service.ts
    // as regras de como devem ser estruturados os dados estão na ENTIDADE courses.entity.ts
  }

  //
  findOne(id: string) {
    return this.var_dbcourses.find(
      (_course: enttCourse) => _course.id === Number(id),
    );
  }

  createNewCourse(createCourseDTO: any) {
    return this.var_dbcourses.push(createCourseDTO);
  }

  updateOneCourse(id: string, updateCourseDTO: any) {
    // encontrar o id refente
    const indiceCurso = this.var_dbcourses.findIndex(
      (_course) => _course.id === Number(id),
    );

    this.var_dbcourses[indiceCurso] = updateCourseDTO;
  }

  removeOneCourse(id: string) {
    const indiceCurso = this.var_dbcourses.findIndex(
      (_course) => _course.id === Number(id),
    );

    if (indiceCurso > -1) {
      this.var_dbcourses.splice(indiceCurso, 1);
    }
  }
}
