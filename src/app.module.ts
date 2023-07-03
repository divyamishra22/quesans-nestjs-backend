import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuesModule } from './ques/ques.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AnsModule } from './ans/ans.module';


require('dotenv').config();

@Module({
  imports: [
     MongooseModule.forRoot(
      //  'mongodb://divya:divya123@127.0.0.1:27017/mynewdb1',
        //  'mongodb://127.0.0.1:27017/mydbqa',
        process.env.MONGODB_URI,
    )
    
      ,QuesModule, UserModule, AuthModule, AnsModule],
  controllers: [AppController,],
  providers: [AppService,  ],
})
export class AppModule {}
