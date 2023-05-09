import { Document, Schema, model } from "mongoose";

export interface Login extends Document {
  name: string;
  email: string;
  dateOfBirth: Date;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const LoginSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<Login>("Login", LoginSchema);