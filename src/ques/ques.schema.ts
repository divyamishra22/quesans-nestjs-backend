import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";

export type NoteDocument = Ques & Document;

@Schema()
export class Ques {

@Prop({required:true , unique: true})
  title: string;

  
  @Prop({required:true , unique:true })
  description: string;

  
  @Prop({required:true})
  tag: string;

  
  @Prop({ optional: true})
  date:  Date;
}
export const NoteSchema = SchemaFactory.createForClass(Ques);