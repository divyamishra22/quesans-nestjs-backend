import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

export type QuesDocument = Ques & Document;

@Schema()
export class Ques {


  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user:  Types.ObjectId;


@Prop({required:true , unique: true})
  title: string;

  
  @Prop({required:true , unique:true })
  description: string;

  
//   @Prop({required:true})
//   tag: string;

  
  @Prop({ optional: true})
  date:  Date;
}
export const QuesSchema = SchemaFactory.createForClass(Ques);