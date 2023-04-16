import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  
   async create(createuser): Promise<User>{
      const user = new this.userModel();
      user.name = createuser.name;
      user.password = createuser.password;
      const email = createuser.email;
      const findemail = await this.userModel.findOne({email}).exec();
      if(!findemail){
      user.email = createuser.email;
      }
      else{
        throw new HttpException(
          'Email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      return user.save();
    }
    

    async findOne(id:string): Promise<User>{
     return await  this.userModel.findOne({id}).exec();
    }
   
    remove(id:string){
      return this.userModel.deleteOne({id}).exec();
    }
     
    async getusername(username:string): Promise<User>{
      return  await this.userModel.findOne({username}).exec();
    }



    
    
   
  async findbyemail(email:string): Promise<any>{
    return await this.userModel.findOne({email}).exec();
  }

 async  updateuserdetails(userId, updateuserdetails){
    const user = await this.userModel.findOne({_id: userId}).exec();
    if(updateuserdetails.name){
      user.name = updateuserdetails.name;
    }
    if(updateuserdetails.password){
       user.password = updateuserdetails.password;
    }
    if(updateuserdetails.email){
       user.email = updateuserdetails.email;
    }
     
      return  user.save();
  }

  
  }

    



