import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-songs.dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {
    }
    @Post()
    create(@Body() createSongDTO: CreateSongDto) {
        const results = this.songsService.create(createSongDTO);
        return results;
    }
    //@Post()
    // create() {
    //     return "create a new song endpoint";
    // }
    // create() {
    //     return this.songsService.create("Animals by Martin Garrix");
    // }
    @Get()
    findAll() {
        //return "find all songs endpoint";
        try {
            return this.songsService.findAll();
        }
        catch (e) {
            throw new HttpException('erver error', HttpStatus.INTERNAL_SERVER_ERROR, { cause: e },);
        }
    }
    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
            }),
        )
        id: number,
    ) {
        return `fetch song on the based on id ${typeof id}`;
    }
    @Put(":id")
    update() {
        return "update song on the based on id";
    }

    @Delete(":id")
    delete() {
        return "delete a song on the based on id";
    }
}
