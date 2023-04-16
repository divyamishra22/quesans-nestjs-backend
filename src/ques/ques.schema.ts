import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";

export type NoteDocument = Note & Document;

@Schema()
export class Note {

@Prop({required:true , unique: true})
  title: string;

  
  @Prop({required:true , unique:true })
  description: string;

  
  @Prop({required:true})
  tag: string;

  
  @Prop({ optional: true})
  date:  Date;
}
export const NoteSchema = SchemaFactory.createForClass(Note);