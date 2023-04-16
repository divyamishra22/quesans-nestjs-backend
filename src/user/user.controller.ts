import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

class UserCreateRequestBody{
    @ApiProperty()  @IsString()  @MinLength(1) name: string;
    @ApiProperty() @IsString() @MinLength(5) password: string;
    @ApiProperty() @IsString() @IsEmail() email: string;
}

@Controller('user')
export class UserController {
   
    
    @Post('/signup')
   async create(@Body() usercreaterequestbody: UserCreateRequestBody){
        return `user created`;
    }

    
    @Get('/userid')
    async find(@Param('id') id: string){
        return`hii `;
    }


    @Get('/username')
    async getusername(@Param('username') username:string){
        return `hii `;
    }

    @Patch('/userid')
    async updateuserdetails( @Param() userId: string ){
        return `user details updated`;
    }


     
    @Delete('/userid')
    async remove(@Param('id')id: string){
    return `user deleted`;
    }
   
}


