import { Document } from "mongoose";

export interface EventsInterfaces extends Document {
    id?: string;
    name: string;
    description: string;
    date: string;
    images: string;
    owner: string;
    address?: string;
    cost?: number;
}