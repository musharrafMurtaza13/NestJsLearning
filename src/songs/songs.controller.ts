import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){
    }
    @Post()
    // create() {
    //     return "create a new song endpoint";
    // }
    create() {
        return this.songsService.create("Animals by Martin Garrix");
        }
    @Get()
    findAll() {
        return "find all songs endpoint";
    }
    @Get(":id")
    findOne() {
        return "fetch song on the based on id";
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
