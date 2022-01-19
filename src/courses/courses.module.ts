import { Module } from '@nestjs/common';


import { AppModule } from '../app/app.module';
import { CoursesController } from '../courses/controllers/courses.controller';
import { CoursesService } from '../courses/providers/courses.service';
@Module({
    imports: [AppModule],
    controllers: [CoursesController],
    providers: [CoursesService], //providers = services


})
export class CoursesModule { }
