import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuesController } from './ques/ques.controller';
import { QuesService } from './ques/ques.service';
import { QuesModule } from './ques/ques.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://divya:divya123@127.0.0.1:27017/mydbqa',
    ),
    
    ,QuesModule],
  controllers: [AppController, QuesController],
  providers: [AppService, QuesService],
})
export class AppModule {}
