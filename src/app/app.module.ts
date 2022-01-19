import { Module } from '@nestjs/common';
import { CoursesModule } from 'src/courses/courses.module';

// importar todos os controller da solucao inteira
import { CoursesService } from '../courses/providers/courses.service';
import { CoursesController } from '../courses/controllers/courses.controller';

@Module({
    imports: [CoursesModule], // modulo importanto modulo

    controllers: [CoursesController],
    providers: [CoursesService], //providers = services
})
export class AppModule { }
