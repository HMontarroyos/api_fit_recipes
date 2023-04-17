import { Document, Schema, model } from "mongoose";

export interface Email extends Document {
  name: string;
  email: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmailSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<Email>("Email", EmailSchema);