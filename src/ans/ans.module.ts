import { Module } from '@nestjs/common';
import { AnsService } from './ans.service';
import { AnsController } from './ans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ans, AnsSchema } from './ans.schema';
import { QuesModule } from 'src/ques/ques.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Ans.name, schema: AnsSchema }]),
        QuesModule, AuthModule, UserModule
      ],
      controllers: [AnsController],
      providers: [AnsService, ],
})
export class AnsModule {}
