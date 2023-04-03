import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
name: { type: String, required: true },
ingredients: [{ type: String, required: true }],
instructions: { type: String, required: true },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
});

export const Recipe = mongoose.model('Recipe', recipeSchema);
