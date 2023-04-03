import { Router } from "express";
import { RecipeController } from "../controllers";

export class RecipeRoutes {
  public recipeController: RecipeController;
  public router: Router;

  constructor() {
    this.router = Router();
    this.recipeController = new RecipeController();
    this.router.get("/", this.recipeController.getAllRecipes);
    this.router.get("/:id", this.recipeController.getRecipeById);
    this.router.post("/", this.recipeController.createRecipe);
    this.router.put("/:id", this.recipeController.updateRecipe);
    this.router.delete("/:id", this.recipeController.deleteRecipe);
  }
}
