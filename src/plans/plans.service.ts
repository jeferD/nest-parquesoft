import { Injectable } from '@nestjs/common';
import { PlansDto } from './dto/plans.dto';

@Injectable()
export class PlansService {
    plans: PlansDto[] = [];
    add(event: PlansDto){
        this.plans.push(event)
    }

    update(id:string, event:PlansDto){
        const index =  this.plans.findIndex((e)=>e.id = id)
        if(index == undefined){
            return
        }
        this.plans.splice(index,1)
    }

    remove(id: string){
        const index =  this.plans.findIndex((e)=>e.id = id)
        if(index == undefined){
            return
        }
        this.plans.splice(index,1)
    }

    get(page: number, pageSize:number): PlansDto[]{
        return this.plans;
    }

    getById(id:string): PlansDto | undefined{
        return this.plans.find((e)=> e.id == id);
    }
}
