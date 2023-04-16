import { Module } from '@nestjs/common';
import { QuesService } from './ques.service';
import { QuesController } from './ques.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ques, QuesSchema } from './ques.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Ques.name, schema: QuesSchema }]),
        AuthModule
      ],
      controllers: [QuesController],
      providers: [QuesService, ],
})
export class QuesModule {}
