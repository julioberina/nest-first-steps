import { Get, Post, Controller, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    async findAll(): Promise<string[]> {
        return ['Cat 1', 'Cat 2', 'Cat 3'];
    }

    @Get(':id')
    findOne(@Param() params) {
        return `This action returns a cat of id ${params.id}`;
    }

    @Post()
    async create(@Body() cat: CreateCatDto): Promise<string> {
        return `${cat.name} is ${cat.age} years old and is a ${cat.breed}`;
    }

    @Put(':id')
    updateOne(@Param('id') id, @Body() cat: CreateCatDto) {
        return `This action updates the cat of id ${id}`;
    }

    @Delete(':id')
    deleteOne(@Param('id') id) {
        return `This action deletes the cat with id ${id}`;
    }
}
