import { PartialType } from '@nestjs/mapped-types';
import { PropertiesCourseDTO } from './properties-course.dto';

export class CreateCourseDto extends PartialType (PropertiesCourseDTO){}