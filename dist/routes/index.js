"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
class RecipeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.recipeController = new controllers_1.RecipeController();
        this.router.get("/", this.recipeController.getAllRecipes);
        this.router.get("/:id", this.recipeController.getRecipeById);
        this.router.post("/", this.recipeController.createRecipe);
        this.router.put("/:id", this.recipeController.updateRecipe);
        this.router.delete("/:id", this.recipeController.deleteRecipe);
    }
}
exports.RecipeRoutes = RecipeRoutes;
//# sourceMappingURL=index.js.map