import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
  name: string;
  description?: string;
  ingredients: {
    amount?: string;
    name: string;
    measurement?: string;
  }[];
  instructions: {
    step: string;
    description: string;
  }[];
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  rating?: number;
  timer: string;
  portion: string;
  difficulty: string;
  type: string;
  occasions: string;
  specialOccasions?: string;
  utensils?: string;
  foodRestriction?: string;
}

const RecipeSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  ingredients: [
    {
      amount: { type: String, required: false },
      name: { type: String, required: true },
      measurement: { type: String, required: false },
    },
  ],
  instructions: [
    {
      step: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  rating: { type: Number, required: false },
  timer: { type: String,  required: true },
  portion: { type: String, required: true },
  difficulty: { type: String, required: true },
  type: { type: String, required: true },
  occasions: { type: String, required: true },
  specialOccasions: { type: String, required: false },
  utensils: { type: String, required: false },
  foodRestriction: { type: String, required: false },
});

export default model<Recipe>("Recipe", RecipeSchema);
