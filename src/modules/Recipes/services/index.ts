import { Recipe } from "../models/recipe";
import { RecipesRepository } from "../repository/index";
class RecipesService {
  private recipesRepository: RecipesRepository;

  constructor() {
    this.recipesRepository = new RecipesRepository();
  }

  public async getAllRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.getAllRecipes();
    return recipes;
  }

  public async getRecipeById(id: string): Promise<Recipe | null> {
    const recipe = await this.recipesRepository.getRecipeById(id);
    return recipe;
  }

  public async createRecipe(recipe: Recipe): Promise<Recipe> {
    const newRecipe = await this.recipesRepository.createRecipe(recipe);
    return newRecipe;
  }

  public async createMultipleRecipes(recipes: Recipe[]): Promise<Recipe[]> {
    const newRecipes = await this.recipesRepository.createMultipleRecipes(recipes);
    return newRecipes;
  }


  public async updateRecipe(
    id: string,
    updatedRecipe: Recipe
  ): Promise<boolean> {
    const result = await this.recipesRepository.updateRecipe(id, updatedRecipe);
    return result;
  }

  public async deleteRecipe(id: string): Promise<boolean> {
    const result = await this.recipesRepository.deleteRecipe(id);
    return result;
  }

  public async deleteAllRecipes(): Promise<boolean> {
    const result = await this.recipesRepository.deleteAllRecipes();
    return result;
  }


}

export const recipesService = new RecipesService();
