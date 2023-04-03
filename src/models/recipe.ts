import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
  createdAt: Date;
  updatedAt: Date;
}

const RecipeSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<Recipe>("Recipe", RecipeSchema);
