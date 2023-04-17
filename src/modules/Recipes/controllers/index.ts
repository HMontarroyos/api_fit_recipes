import { Request, Response } from "express";
import { Recipe } from "../models/recipe";
import { recipesService } from "../services/index";

export class RecipeController {
  public async getAllRecipes(req: Request, res: Response): Promise<void> {
    try {
      const recipes: Recipe[] = await recipesService.getAllRecipes();
      res.status(200).json(recipes);
    } catch (error) {
      console.error("Error while fetching recipes", error);
      res.status(500).send("Internal server error");
    }
  }

  public async getRecipeById(req: Request, res: Response): Promise<void> {
    const recipeId: string = req.params.id;

    try {
      const recipe: Recipe | null = await recipesService.getRecipeById(
        recipeId
      );

      if (!recipe) {
        res.status(404).json({ error: "Recipe not found" });
        return;
      }

      res.status(200).json(recipe);
    } catch (error) {
      console.error(`Error while fetching recipe with id ${recipeId}`, error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async createRecipe(req: Request, res: Response): Promise<void> {
    try {
      const newRecipe: Recipe = req.body;
      const createdRecipe: Recipe = await recipesService.createRecipe(
        newRecipe
      );
      res.status(201).json(createdRecipe);
    } catch (error) {
      console.error("Error while creating recipe", error);
      res.status(500).send("Internal server error");
    }
  }

  public async createMultipleRecipes(req: Request, res: Response): Promise<void> {
    try {
      const newRecipes: Recipe[] = req.body;
      const createdRecipes: Recipe[] =
        await recipesService.createMultipleRecipes(newRecipes);
      res.status(201).json(createdRecipes);
    } catch (error) {
      console.error("Error while creating recipes", error);
      res.status(500).send("Internal server error");
    }
  }

  public async updateRecipe(req: Request, res: Response): Promise<void> {
    const recipeId: string = req.params.id;
    const updatedRecipe: Recipe = req.body;

    try {
      await recipesService.updateRecipe(recipeId, updatedRecipe);
      res.status(200).send("Recipe updated successfully");
    } catch (error) {
      console.error(`Error while updating recipe with id ${recipeId}`, error);
      res.status(404).send("Recipe not found");
    }
  }

  public async deleteRecipe(req: Request, res: Response): Promise<void> {
    const recipeId: string = req.params.id;
    try {
      const result: boolean = await recipesService.deleteRecipe(recipeId);
      res.status(200).send('Recipe deleted successfully')
    } catch (error) {
      console.error(`Error while deleting recipe with id ${recipeId}`, error);
      res.status(500).send("Internal server error");
    }
  }

  public async deleteAllRecipes(req: Request, res: Response): Promise<void> {
    try {
      const result: boolean = await recipesService.deleteAllRecipes();
      if (result) {
        res.status(200).send("All recipes deleted successfully");
      } else {
        res.status(404).send("No recipes found to delete");
      }
    } catch (error) {
      console.error("Error while deleting all recipes", error);
      res.status(500).send("Internal server error");
    }
  }


}
