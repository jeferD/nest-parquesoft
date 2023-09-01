import { IsNotEmpty, IsDate, IsUrl, ValidateIf, Min, ValidationOptions } from "class-validator";

export class EventDto {
    id?: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    // @IsDate()
    date: string;
    @IsUrl()
    images: string;

    @IsNotEmpty()
    owner: string;

    @ValidateIf((_,value)=> value != undefined)
    address?: string;

    // @ValidateIf((_,value)=> value != undefined)
    @IsNull()
    @Min(0)
    cost?: number;
}



function IsNull(validationOptions?: ValidationOptions){
    return ValidateIf((_,value)=> value != undefined, validationOptions)
}





