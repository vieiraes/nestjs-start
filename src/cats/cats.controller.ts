import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return 'Lista de todos gatos';
    }
}
