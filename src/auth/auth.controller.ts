import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


class UserVerifyRequestBody{
    @ApiProperty()@MinLength(5) @IsString() password: string;
     @ApiProperty() @IsString() @IsEmail()  email: string;
  }

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

  

    @Post('/login')
     async login(@Body()userverifyrequest: UserVerifyRequestBody): Promise<any>{
      const user = await this.authService.login(userverifyrequest.email, userverifyrequest.password);
      return user;
     }
}
