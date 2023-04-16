import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { getUserbyId } from 'src/auth/auth.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guards';
import { AnsService } from './ans.service';



class CreateAns{
    
    @ApiProperty()  @IsString() @MinLength(5) answer: string;
    @ApiProperty()  @IsString() @IsNotEmpty() quesId: string;
    @ApiProperty() @IsString() @IsOptional() date: string;
    
}
@ApiTags('ans')
@Controller('ans')
export class AnsController {
    constructor(private anservice: AnsService){}



@UseGuards(JwtGuard)
@ApiBearerAuth()
@Post('/postyourans')
async createyourques(@Body() createans: CreateAns, @getUserbyId() userId:string){
return await this.anservice.createyourans(createans.answer, createans.quesId, createans.date, userId);
}

@Get('/anstoyourques')
getanswertoyourques(@Param('quesId') quesId: string){
    return this.anservice.getanswerstoyourques(quesId);
}


@UseGuards(JwtGuard)
@ApiBearerAuth()
@Get('/getyourans')
 getyourques(@getUserbyId() userId:string){
    return  this.anservice.getyourans(userId);
}

// @Get('/getallques')
// async getallques(): Promise<Ques[]>{
//     return await this.queservice.getallques();
// }


@UseGuards(JwtGuard)
@ApiBearerAuth()
@Delete('/deleteyourques')
    async deleteyourques(@getUserbyId() userid:string){
        return await this.anservice.deleteyourans(userid);
    }
}
