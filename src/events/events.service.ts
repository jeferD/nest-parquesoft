import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import {EventsInterfaces} from './interfaces/events.interfaces'

@Injectable()
export class EventsService {
    events: EventDto[] = [];

    constructor(@InjectModel('Events') private readonly eventsModule: Model<EventsInterfaces> ){
        
    }
    async get(page: number, pageSize:number): Promise<EventsInterfaces[]>{
        const events = await this.eventsModule.find()
        return events;
    }

    async getById(id:string): Promise<EventsInterfaces>{
        const events = await this.eventsModule.findById(id);
        return events;
        
    }

    async add(eventDto: EventDto): Promise<EventsInterfaces>{
        const events =  new this.eventsModule(eventDto)
        return await events.save();
    }
    
    async remove(id: string): Promise<EventsInterfaces>{
        const deleteEvents = await this.eventsModule.findByIdAndDelete(id);
        return deleteEvents;
    }


    async update(id:string, event:EventDto): Promise<EventsInterfaces>{
        const updateEvents = await this.eventsModule.findByIdAndUpdate(id, event, {new: true});
        return updateEvents;
    }


}
