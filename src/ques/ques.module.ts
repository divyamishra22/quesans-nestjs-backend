import { Module } from '@nestjs/common';
import { QuesService } from './ques.service';
import { QuesController } from './ques.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ques, QuesSchema } from './ques.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Ques.name, schema: QuesSchema }]),
        
      ],
      controllers: [QuesController],
      providers: [QuesService, ],
})
export class QuesModule {}
