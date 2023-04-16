import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { QuesService } from './ques.service';
import { getUserbyId } from 'src/auth/auth.decorator';
import { Ques } from './ques.schema';
import { JwtGuard } from 'src/auth/guards/jwt.guards';

class CreateQues{
    @ApiProperty() @IsString() @MinLength(3) title: string;
    @ApiProperty()  @IsString() @MinLength(5) description: string;
    
}

class UpdateQues extends PartialType(CreateQues){}

@ApiTags('ques')
@Controller('ques')
export class QuesController {
    constructor(private queservice: QuesService){}

@UseGuards(JwtGuard)
@ApiBearerAuth()
@Post('/createyourques')
async createyourques(@Body() createques: CreateQues, @getUserbyId() userId:string){
return await this.queservice.createyourques(createques.title, createques.description, userId);
}


@UseGuards(JwtGuard)
@ApiBearerAuth()
@Get('/getyourques')
 getyourques(@getUserbyId() userId:string){
    return  this.queservice.getyourques(userId);
}

@Get('/getallques')
async getallques(): Promise<Ques[]>{
    return await this.queservice.getallques();
}


@UseGuards(JwtGuard)
@ApiBearerAuth()
@Delete('/deleteyourques')
    async deleteyourques(@getUserbyId() userid:string){
        return await this.queservice.deleteyourques(userid);
    }
  

// @UseGuards(JwtGuard)
// @ApiBearerAuth()
// @Patch('/updateyourques')
//     async updateyourques(@getUserbyId() userid:string, @Body()updateques:UpdateQues){
//         return await this.queservice.updateyourques(userid,updateques );
//     }
    
}
