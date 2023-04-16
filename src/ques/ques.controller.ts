import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { QuesService } from './ques.service';
import { getUserbyId } from 'src/auth/auth.decorator';

class CreateQues{
    @ApiProperty() @IsString() @MinLength(3) title: string;
    @ApiProperty()  @IsString() @MinLength(5) description: string;
    
}

class UpdateQues extends PartialType(CreateQues){}

@ApiTags('ques')
@Controller('ques')
export class QuesController {
    constructor(private queservice: QuesService){}

@Post('/createyourques')
async createyourques(createques: CreateQues){
return await this.queservice.createyourques(createques.title, createques.description);
}

@Get('/getyourques')
async getyourques(@getUserbyId() userid:string){
    return await this.getyourques(userid);
}

@Get('/getallques')
async getallques(){
    return await this.getallques();
}




@Delete('/deleteyourques')
    async deleteyourques(@getUserbyId() userid:string){
        return await this.deleteyourques(userid);
    }
  


@Patch('/updateyourques')
    async updateyourques(@getUserbyId() userid:string, updateques:UpdateQues){
        return await this.updateyourques(userid,updateques );
    }
    
}
