import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ques } from './ques.schema';

@Injectable()
export class QuesService {
    constructor(@InjectModel(Ques.name) private quesModel: Model<any>){}

    async  createyourques(title:string, desc:string): Promise<Ques>{
        const ques = new this.quesModel();
        const findtitle =  await this.quesModel.findOne({title}).exec();
        if(!findtitle)
        ques.title = title;
        else{
           throw new HttpException(
               'Tittle already exists',
               HttpStatus.BAD_REQUEST,
             );
        }
        const finddesc = await this.quesModel.findOne({desc}).exec()
        if(!finddesc){
        ques.description = desc;
        }
        else{
         throw new HttpException(
           'Description already exists ',
           HttpStatus.BAD_REQUEST,
         )
        }
        
        return ques.save();
       }
   
   
       async updateyourques(){
         return `updated your question successfully`;
       }
   
   
   
       async deleteyournote(){
         return `deleted your ques sucessfully`;
       }
   }
   

