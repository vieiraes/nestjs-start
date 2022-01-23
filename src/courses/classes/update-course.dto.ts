import { PartialType } from '@nestjs/mapped-types';
import { PropertiesCourseDTO } from '../classes/properties-course.dto';

//para usar o PartialTypes precisa do pacote mapped-types
export class UpdateCourseDto extends PartialType(PropertiesCourseDTO){}


