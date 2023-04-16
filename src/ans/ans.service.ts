import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Ans } from './ans.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AnsService {
    constructor(@InjectModel(Ans.name) private ansModel: Model<any>){}

    async createyourans(answer:string, quesId: string, date:string, userId: string): Promise<Ans>{
        const ans = new this.ansModel();
        const findans =  await this.ansModel.findOne({ans}).exec();
        if(!findans)
        ans.answer = answer;
        else{
           throw new HttpException(
               'Answer already exists',
               HttpStatus.BAD_REQUEST,
             );
        }
        ans.date = date;
        ans.user = userId;
        ans.ques = quesId;
        return ans.save();
    }

    async getanswerstoyourques(quesId:string): Promise<Ans[]>{
        return await this.ansModel.find({ques: quesId});
    }

    async getyourans(userId: string): Promise<Ans[]>{
        return await this.ansModel.find({user: userId});
    }

     async  deleteyourans(userId:string): Promise<any>{
        return await this.ansModel.deleteOne({userId}).exec()
    }
}
