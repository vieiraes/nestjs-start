import { PartialType } from '@nestjs/mapped-types';
import { ValidatorCourseDTO } from './validator-course.dto';


export class UpdateCourseDto extends PartialType(ValidatorCourseDTO){}


