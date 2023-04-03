import { Request, Response } from 'express';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../services/index';

export class RecipeController {
  private recipesService: RecipesService;

  constructor() {
    this.recipesService = new RecipesService();
  }

  public async getAllRecipes(req: Request, res: Response): Promise<void> {
    try {
      const recipes: Recipe[] = await this.recipesService.getAllRecipes();
      console.log(`Fetched ${recipes.length} recipes`);
      res.status(200).json(recipes);
    } catch (error) {
      console.error('Error while fetching recipes', error);
      res.status(500).send('Internal server error');
    }
  }

  public async getRecipeById(req: Request, res: Response): Promise<void> {
    const recipeId: string = req.params.id;

    try {
      const recipe: Recipe | null = await this.recipesService.getRecipeById(recipeId);
      if (recipe) {
        console.log(`Fetched recipe with id ${recipeId}`);
        res.status(200).json(recipe);
      } else {
        console.log(`Recipe with id ${recipeId} not found`);
        res.status(404).send('Recipe not found');
      }
    } catch (error) {
      console.error(`Error while fetching recipe with id ${recipeId}`, error);
      res.status(500).send('Internal server error');
    }
  }

  public async createRecipe(req: Request, res: Response): Promise<void> {
    console.log('Entered createRecipe method');
    try {
      const newRecipe: Recipe = req.body;
      const createdRecipe: Recipe = await this.recipesService.createRecipe(newRecipe);
      console.log(`Created recipe with id ${createdRecipe.id}`);
      res.status(201).json(createdRecipe);
    } catch (error) {
      console.error('Error while creating recipe', error);
      res.status(500).send('Internal server error');
    }
  }

  public async updateRecipe(req: Request, res: Response): Promise<void> {
    const recipeId: string = req.params.id;
    const updatedRecipe: Recipe = req.body;

    try {
      const result: boolean = await this.recipesService.updateRecipe(recipeId, updatedRecipe);
      if (result) {
        console.log(`Updated recipe with id ${recipeId}`);
        res.status(200).send('Recipe updated successfully');
      } else {
        console.log(`Recipe with id ${recipeId} not found`);
        res.status(404).send('Recipe not found');
      }
    } catch (error) {
      console.error(`Error while updating recipe with id ${recipeId}`, error);
      res.status(500).send('Internal server error');
    }
  }

  public async deleteRecipe(req: Request, res: Response): Promise<void> {
    const recipeId: string = req.params.id;

    try {
      const result: boolean = await this.recipesService.deleteRecipe(recipeId);
      if (result) {
        console.log(`Deleted recipe with id ${recipeId}`);
        res.status(200).send('Recipe deleted successfully');
      } else {
        console.log(`Recipe with id ${recipeId} not found`);
        res.status(404).send('Recipe not found');
      }
    } catch (error) {
      console.error(`Error while deleting recipe with id ${recipeId}`, error);
      res.status(500).send('Internal server error');
    }
  }
}
