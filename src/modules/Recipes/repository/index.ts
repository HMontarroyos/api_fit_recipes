import Recipe from "../models/recipe";

export class RecipesRepository {
  public async getAllRecipes(): Promise<any> {
    const recipes = await Recipe.find().exec();
    return recipes;
  }

  public async getRecipeById(id: string): Promise<any> {
    try {
      const recipe = await Recipe.findById(id).exec();
      if (!recipe) throw new Error(`Recipe with id ${id} not found`);
      return recipe;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async createRecipe(recipe: any): Promise<any> {
    const newRecipe = new Recipe(recipe);
    const savedRecipe = await newRecipe.save();
    return savedRecipe;
  }

  public async createMultipleRecipes(recipes: any): Promise<any> {
    const newRecipes = await Recipe.insertMany(recipes);
    return newRecipes;
  }

  public async updateRecipe(id: string, updatedRecipe: any): Promise<boolean> {
    const result = await Recipe.updateOne({ _id: id }, updatedRecipe).exec();
    if (result.modifiedCount === 0) {
      throw new Error(`Recipe with ID ${id} not found`);
    }
    return true;
  }

  public async deleteRecipe(id: string): Promise<boolean> {
    const result = await Recipe.deleteOne({ _id: id }).exec();
    return result.deletedCount> 0;
  }

  public async deleteAllRecipes(): Promise<boolean> {
    const result = await Recipe.deleteMany({}).exec();
    return result.deletedCount > 0;
  }
}
