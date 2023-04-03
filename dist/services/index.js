"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const index_1 = require("../repository/index");
class RecipesService {
    constructor() {
        this.recipesRepository = new index_1.RecipesRepository();
    }
    async getAllRecipes() {
        const recipes = await this.recipesRepository.getAllRecipes();
        return recipes;
    }
    async getRecipeById(id) {
        const recipe = await this.recipesRepository.getRecipeById(id);
        return recipe;
    }
    async createRecipe(recipe) {
        const newRecipe = await this.recipesRepository.createRecipe(recipe);
        return newRecipe;
    }
    async updateRecipe(id, updatedRecipe) {
        const result = await this.recipesRepository.updateRecipe(id, updatedRecipe);
        return result;
    }
    async deleteRecipe(id) {
        const result = await this.recipesRepository.deleteRecipe(id);
        return result;
    }
}
exports.RecipesService = RecipesService;
//# sourceMappingURL=index.js.map