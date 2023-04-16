import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ques } from './ques.schema';

@Injectable()
export class QuesService {
    constructor(@InjectModel(Ques.name) private quesModel: Model<any>){}

    async  createyourques(title:string, desc:string, userId:string): Promise<Ques>{
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
        ques.user = userId;
        return ques.save();
       }
   
   
      //  async updateyourques(userid:string, updateques){
      //     const ques = await this.quesModel.findOne({_id: userid}).exec();
      //    if(updateques.title){
      //      ques.name = updateques.title;
      //    }
      //    if(updateques.description){
      //       ques.password = updateques.description;
      //    }
         
      //      return  ques.save();
      
      //  }
   

       async getallques(): Promise<Ques[]>{
        return this.quesModel.find().exec();
       }
      
       async getyourques(userId:string): Promise<Ques[]>{
        return this.quesModel.find({user:userId}).exec();
       }
   

   
       async deleteyourques(userid:string): Promise<any>{
         return this.quesModel.deleteOne({userid}).exec();;
       }
   }
   

