import { Recipe } from '../models/recipe';
import { RecipesRepository } from '../repository/index';

export class RecipesService {
  private recipesRepository: RecipesRepository;

  constructor() {
    this.recipesRepository = new RecipesRepository();
  }

  public async getAllRecipes(): Promise<Recipe[]> {
    console.log('ENTERED getAllRecipes SERVICE');
    const recipes = await this.recipesRepository.getAllRecipes();
    console.log(`RETURNING ${recipes.length} recipes from getAllRecipes SERVICE`);
    return recipes;
  }

  public async getRecipeById(id: string): Promise<Recipe | null> {
    console.log(`ENTERED getRecipeById SERVICE with id: ${id}`);
    const recipe = await this.recipesRepository.getRecipeById(id);
    console.log(`RETURNING recipe from getRecipeById SERVICE`);
    return recipe;
  }

  public async createRecipe(recipe: Recipe): Promise<Recipe> {
    console.log('ENTERED createRecipe SERVICE');
    const newRecipe = await this.recipesRepository.createRecipe(recipe);
    console.log(`CREATED recipe with id ${newRecipe.id} in createRecipe SERVICE`);
    return newRecipe;
  }

  public async updateRecipe(id: string, updatedRecipe: Recipe): Promise<boolean> {
    console.log(`ENTERED updateRecipe SERVICE with id: ${id}`);
    const result = await this.recipesRepository.updateRecipe(id, updatedRecipe);
    if (result) {
      console.log(`UPDATED recipe with id ${id} in updateRecipe SERVICE`);
    } else {
      console.log(`Recipe with id ${id} not found in updateRecipe SERVICE`);
    }
    return result;
  }

  public async deleteRecipe(id: string): Promise<boolean> {
    console.log(`ENTERED deleteRecipe SERVICE with id: ${id}`);
    const result = await this.recipesRepository.deleteRecipe(id);
    if (result) {
      console.log(`DELETED recipe with id ${id} in deleteRecipe SERVICE`);
    } else {
      console.log(`Recipe with id ${id} not found in deleteRecipe SERVICE`);
    }
    return result;
  }
}
