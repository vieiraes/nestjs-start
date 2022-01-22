import { Module } from '@nestjs/common';
import { CoursesModule } from '../courses/modules/courses.module'

//Modulo nao importa CONTROLLER NEM SERVICE
//MODULO Main só importa modulo filho
@Module({
    imports: [CoursesModule], // modulo importanto modulo

    controllers: [],
    providers: [], //providers = services
})
export class AppModule {

}
