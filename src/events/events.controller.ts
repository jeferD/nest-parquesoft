import { Body, Controller,Res, Post, Get, Query, Delete, Param, Put, NotFoundException, HttpStatus } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private readonly service: EventsService) {
        
    }

    @Post()
    async add(@Res() res,@Body() event:EventDto){
        const eventCreate = await this.service.add(event)
        // this.service.add(event)
        return res.status(HttpStatus.OK).json({
            message: 'Creacion correcta',
            product: eventCreate
        })
    }

    @Get()
    async getEvents(@Res() res, @Query("page") page?: number, @Query("page_size") pageSize?: number):Promise <EventDto[]>{
        const eventCreate = await this.service.get(page ?? 1, pageSize ?? 50)
        return res.status(HttpStatus.OK).json({
            message: 'Consulta correcta',
            product: eventCreate
        })
    }


    @Delete(":id")
    async removeEvent(@Res() res, @Param("id") id: string){
        const result =  await this.service.remove(id)
        if(result == undefined){
            throw new NotFoundException();
        }
        return res.status(HttpStatus.OK).json({
            message: 'Eliminacion correcta',
            product: result
        })
    }

    @Get(":id")
    async getEventsById(@Res() res, @Param("id") id: string): Promise <EventDto>{
        const result =  await this.service.getById(id)
        if(result == undefined){
            throw new NotFoundException();
        }

        return res.status(HttpStatus.OK).json({
            message: 'Consulta por id correcto',
            product: result
        })
    }

    @Put(":id")
    async updateEvent(@Res() res, @Param("id") id: string, @Body() event: EventDto) {
        const result =  await this.service.update(id, event)
        return res.status(HttpStatus.OK).json({
            message: 'Proceso correcto',
            product: result
        })
    }
}
