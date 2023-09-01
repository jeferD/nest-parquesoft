import { Schema } from "mongoose";


export const EventSchema = new Schema({
    id: {type: String, require: false},
    name: {type: String, require: true},
    description: {type: String, require: true},
    date: {type: String, require: true},
    images: {type: String, require: true},

    owner: {type: String, require: true},

    address: {type: String, require: true},

    // @ValidateIf((_,value)=> value != undefined)
    cost: {type: Number, require: false},
})