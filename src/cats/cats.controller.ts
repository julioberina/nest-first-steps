import { Get, Post, Controller, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cats } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cats[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params) {
        return `This action returns a cat of id ${params.id}`;
    }

    @Post()
    async create(@Body() cat: CreateCatDto): Promise<boolean> {
        this.catsService.create(cat);
        return true;
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
