import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuesController } from './ques/ques.controller';
import { QuesService } from './ques/ques.service';
import { QuesModule } from './ques/ques.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://divya:divya123@127.0.0.1:27017/mydbqa',
    ),
    
    ,QuesModule, UserModule],
  controllers: [AppController, QuesController, UserController],
  providers: [AppService, QuesService, UserService],
})
export class AppModule {}
