import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

class CreateQues{
    @ApiProperty() @IsString() @MinLength(3) title: string;
    @ApiProperty()  @IsString() @MinLength(5) description: string;
    
}


@Controller('ques')
export class QuesController {

@Post('/createyourques')
async createyourques(createques: CreateQues){
return `ques created`;
}

@Get('/getyourques')
async getyourques(){
    return `your ques displayed`;
}

@Get('/getallques')
async getallques(){
    return `all ques displayed`;
}




@Delete('/deleteyourques')
    async deleteyourques(){
        return `ques deleted`;
    }
  


@Patch('/updateyourques')
    async updateyourques(){
        return `ques updated`;
    }
    
}
