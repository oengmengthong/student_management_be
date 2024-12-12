import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  age: number;
  classId: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  classId: { type: String, required: true },
});

export const StudentModel = mongoose.model<IStudent>('Student', StudentSchema);