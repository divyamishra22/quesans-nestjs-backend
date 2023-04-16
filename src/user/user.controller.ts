import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { UserService } from './user.service';

class UserCreateRequestBody{
    @ApiProperty()  @IsString()  @MinLength(1) name: string;
    @ApiProperty() @IsString() @MinLength(5) password: string;
    @ApiProperty() @IsString() @IsEmail() email: string;
}

class UserUpdateRequestBody extends PartialType(UserCreateRequestBody){}

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Post('/signup')
   async create(@Body() usercreaterequestbody: UserCreateRequestBody){
        return await this.userService.create(usercreaterequestbody);
    }

    
    @Get('/userid')
    async find(@Param('id') id: string){
        return await this.userService.findOne(id);
    }


    @Get('/username')
    async getusername(@Param('username') username:string){
        return await this.userService.getusername(username);
    }

    @Patch('/userid')
    async updateuserdetails(@Body() userupdaterequestbody :UserUpdateRequestBody,  @Param() userId: string ){
        return await this.userService.updateuserdetails(userupdaterequestbody, userId);
    }


     
    @Delete('/userid')
    async remove(@Param('id')id: string){
    return await this.userService.remove(id);
    }
   
}


