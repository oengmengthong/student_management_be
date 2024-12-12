import mongoose, { Schema, Document } from 'mongoose';

export interface IClass extends Document {
  name: string;
  description: string;
}

const ClassSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

export const ClassModel = mongoose.model<IClass>('Class', ClassSchema);