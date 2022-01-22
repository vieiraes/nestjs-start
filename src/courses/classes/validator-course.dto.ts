import { IsString } from 'class-validator';

//DTO se cria como CLASS no NESTJS
// tive que fazer o import na mao
//DTO usado pra definir intercaes ous informacoes no payload da requisição
// nao possui logica de negocio
// class simples usado pra tipas os daddos
// nao precisa criar testes

export class ValidatorCourseDTO {
    
    @IsString()
    readonly name: string;
    
    @IsString()
    readonly description: string;
    
    @IsString()
    readonly tags: string[]

}