"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const index_1 = require("../services/index");
class RecipeController {
    constructor() {
        this.recipesService = new index_1.RecipesService();
    }
    async getAllRecipes(req, res) {
        try {
            const recipes = await this.recipesService.getAllRecipes();
            res.status(200).json(recipes);
        }
        catch (error) {
            res.status(500).send('Internal server error');
        }
    }
    async getRecipeById(req, res) {
        const recipeId = req.params.id;
        try {
            const recipe = await this.recipesService.getRecipeById(recipeId);
            if (recipe) {
                res.status(200).json(recipe);
            }
            else {
                res.status(404).send('Recipe not found');
            }
        }
        catch (error) {
            res.status(500).send('Internal server error');
        }
    }
    async createRecipe(req, res) {
        const newRecipe = req.body;
        try {
            const createdRecipe = await this.recipesService.createRecipe(newRecipe);
            res.status(201).json(createdRecipe);
        }
        catch (error) {
            res.status(500).send('Internal server error');
        }
    }
    async updateRecipe(req, res) {
        const recipeId = req.params.id;
        const updatedRecipe = req.body;
        try {
            const result = await this.recipesService.updateRecipe(recipeId, updatedRecipe);
            if (result) {
                res.status(200).send('Recipe updated successfully');
            }
            else {
                res.status(404).send('Recipe not found');
            }
        }
        catch (error) {
            res.status(500).send('Internal server error');
        }
    }
    async deleteRecipe(req, res) {
        const recipeId = req.params.id;
        try {
            const result = await this.recipesService.deleteRecipe(recipeId);
            if (result) {
                res.status(200).send('Recipe deleted successfully');
            }
            else {
                res.status(404).send('Recipe not found');
            }
        }
        catch (error) {
            res.status(500).send('Internal server error');
        }
    }
}
exports.RecipeController = RecipeController;
//# sourceMappingURL=index.js.map