import { ApiProperty } from '@nestjs/swagger';

//DTO se cria como CLASS no NESTJS
// tive que fazer o import na mao
//DTO usado pra defiimport { ApiPropertyOptions } from '../../../node_modules/@nestjs/swagger/dist/decorators/api-property.decorator.d';
//nir intercaes ous informacoes no payload da requisição
// nao possui logica de negocio
// class simples usado pra tipas os daddos
// nao precisa criar testes

export class PropertiesCourseDTO {
    
    @ApiProperty()
    readonly name: string;
    
    @ApiProperty()
    readonly description: string;
    
    @ApiProperty()
    readonly tags: string[]

}