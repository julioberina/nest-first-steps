import { Get, Post, Controller, HttpCode, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return 'This action returns all cats';
    }

    @Get(':id')
    findOne(@Param() params) {
        return `This action returns a cat of id ${params.id}`;
    }

    @Get('altid/:alt_id')
    findOneAlt(@Param('alt_id') alt_id) {
        return `This action alternatively returns cat of id ${alt_id}`;
    }

    @Post()
    create() {
        return 'This action adds a cat';
    }
}
