import { Router } from "express";
import { RecipeController } from "../modules/Recipes/controllers";
import { EmailController } from "../modules/Email/controllers";
import { LoginController } from "../modules/Login/controllers";
import AuthMiddleware from "../modules/Login/Middleware/AuthMiddleware";
export class RecipeRoutes {
  public recipeController: RecipeController;
  public router: Router;

  constructor() {
    this.router = Router();
    this.recipeController = new RecipeController();
    this.router.get("/", this.recipeController.getAllRecipes);
    this.router.get("/:id", this.recipeController.getRecipeById);
    this.router.post("/", this.recipeController.createRecipe);
    this.router.post("/all", this.recipeController.createMultipleRecipes);
    this.router.put("/:id", this.recipeController.updateRecipe);
    this.router.delete("/:id", this.recipeController.deleteRecipe);
    this.router.delete("/delete/all", this.recipeController.deleteAllRecipes);
  }
}

export class EmailRoutes {
  public emailController: EmailController;
  public router: Router;

  constructor() {
    this.router = Router();
    this.emailController = new EmailController();
    this.router.post("/", this.emailController.saveEmail);
    this.router.get("/", this.emailController.getAllEmails);
  }
}

export class LoginRoutes {
  public loginController: LoginController;
  public router: Router;

  constructor() {
    this.router = Router();
    this.loginController = new LoginController();
    this.router.post("/register", this.loginController.createUser);
    this.router.post("/", this.loginController.login);
    this.router.get("/user", AuthMiddleware.authenticate, this.loginController.getUser);
  }
}
