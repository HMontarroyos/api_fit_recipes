"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesRepository = void 0;
const recipe_1 = __importDefault(require("../models/recipe"));
class RecipesRepository {
    async getAllRecipes() {
        const recipes = await recipe_1.default.find().exec();
        return recipes;
    }
    async getRecipeById(id) {
        try {
            const recipe = await recipe_1.default.findById(id).exec();
            if (!recipe)
                throw new Error(`Recipe with id ${id} not found`);
            return recipe;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    async createRecipe(recipe) {
        const newRecipe = new recipe_1.default(recipe);
        const savedRecipe = await newRecipe.save();
        return savedRecipe;
    }
    async updateRecipe(id, updatedRecipe) {
        const result = await recipe_1.default.updateOne({ _id: id }, updatedRecipe).exec();
        if (result.modifiedCount === 0) {
            throw new Error(`Recipe with ID ${id} not found`);
        }
        return true;
    }
    async deleteRecipe(id) {
        const result = await recipe_1.default.deleteOne({ _id: id }).exec();
        if (result.deletedCount !== undefined && result.deletedCount > 0) {
            throw new Error(`Recipe with ID ${id} not found`);
        }
        return true;
    }
}
exports.RecipesRepository = RecipesRepository;
//# sourceMappingURL=index.js.map