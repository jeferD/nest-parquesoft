import { PlansDto } from './dto/plans.dto';
import { PlansService } from './plans.service';
import { Body, Controller, Post, Get, Query, Delete, Param, Put, NotFoundException } from '@nestjs/common';


@Controller('plans')
export class PlansController {
    constructor(private readonly service: PlansService) {
        
    }

    @Post()
    add(@Body() event:PlansDto){
        this.service.add(event)
    }

    @Get()
    getEvents(@Query("page") page?: number, @Query("page_size") pageSize?: number): PlansDto[]{
        return this.service.get(page ?? 1, pageSize ?? 50)
    }


    @Delete(":id")
    removeEvent(@Param("id") id: string){
        this.removeEvent(id)
    }

    @Get(":id")
    getEventsById(@Param("id") id: string): PlansDto{
        const result = this.service.getById(id)
        if(result == undefined){
            throw new NotFoundException();
        }
        return result;
    }

    @Put(":id")
    updateEvent(@Param("id") id: string, @Body() event: PlansDto) {
        this.service.update(id, event)
    }
}
