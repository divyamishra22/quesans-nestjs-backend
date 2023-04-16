import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, {  Types } from "mongoose";
import { Schema } from "@nestjs/mongoose";

export type AnsDocument = Ans & Document;

@Schema()
export class Ans {


  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Ques'})
  ques:  Types.ObjectId;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user:  Types.ObjectId;


// @Prop({required:true , unique: true})
//   title: string;

  
  @Prop({required:true , unique:true })
  answer: string;

  @Prop({ optional: true})
  date:  Date;
}
export const AnsSchema = SchemaFactory.createForClass(Ans);