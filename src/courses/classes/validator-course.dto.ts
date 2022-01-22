import { IsString } from 'class-validator';


export class ValidatorCourseDTO {
    
    @IsString()
    readonly name: string;
    
    @IsString()
    readonly description: string;
    
    @IsString()
    readonly tags: string[]

}