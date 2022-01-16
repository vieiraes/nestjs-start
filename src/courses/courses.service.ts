import { Injectable } from '@nestjs/common';
import { enttCourse } from './entities/course.entity';

//controller é courses.controller.ts
// pra injetar um serviço num controller, precisa ir noarquivo de controller e aplicar o 
@Injectable()
export class CoursesService {
    private dbcourses: enttCourse[] = [
        {
            id: 1,
            name: "Fundamentos do Framwork NESTJS",
            description: "Fundamentos do NESTJS",
            tags:["noje.js", "nestjs", "javascript"] 
        },
        {
            id: 2,
            name: "Fundamentos do Alura",
            description: "Fundamentos do Alura",
            tags:["noje.js", "nestjs", "javascript", "alura"] 
        },
        {
            id: 3,
            name: "Fundamentos do Framwork NESTJS",
            description: "Fundamentos do NESTJS",
            tags:["noje.js", "nestjs", "javascript"],
            
        }




    ]



    
} 