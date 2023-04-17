import request from "supertest";
import { App } from "../../../src/app";
import { connect, closeDatabase } from "../../../src/config/database";
import RecipeModel from "../../../src/modules/Recipes/models/recipe";

const app = new App().app;

describe("RecipeController", () => {
  beforeAll(async () => {
    await connect();
  });

  afterEach(async () => {
    await RecipeModel.deleteMany({});
  });

  afterAll(async () => {
    await closeDatabase();
  });

  describe("GET /recipes", () => {
    it("should return an empty array", async () => {
      const response = await request(app).get("/recipes");
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe("POST /recipes", () => {
    it("should create a new recipe", async () => {
      const recipe = {
        name: "Espaguete à Carbonara",
        description: "Um prato clássico de massa italiana",
        ingredients: [
          "espaguete",
          "ovos",
          "barriga de porco",
          "queijo pecorino ralado",
        ],
        image: "http://receitasdeminuto.com/wp-content/uploads/2012/09/espaguete_a_carbonara_anglo_america.jpg",
        instructions:
          "Cozinhe o espaguete de acordo com as instruções da embalagem. Em uma tigela grande, misture os ovos e o queijo pecorino ralado. Em uma frigideira grande, cozinhe a barriga de porco em fogo médio até ficar crocante. Adicione o espaguete cozido à frigideira e misture com a barriga de porco. Retire a frigideira do fogo e despeje a mistura de ovos e queijo sobre o espaguete. Misture bem. Sirva imediatamente.",
      };

      const response = await request(app).post("/recipes").send(recipe);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("_id");
      expect(response.body.name).toBe(recipe.name);
    });

    it("should return 500 if recipe data is incomplete", async () => {
      const recipe = {
        name: "Espaguete à Carbonara",
        description: "Um prato clássico de massa italiana",
        ingredients: [
          "espaguete",
          "ovos",
          "barriga de porco",
          "queijo pecorino ralado",
        ],
      };

      const response = await request(app).post("/recipes").send(recipe);
      expect(response.status).toBe(500);
    });
  });

  describe("GET /recipes/:id", () => {
    it("should return a recipe by id", async () => {
      const recipe = await RecipeModel.create({
        name: "Espaguete à Carbonara",
        description: "Um prato clássico de massa italiana",
        ingredients: [
          "espaguete",
          "ovos",
          "barriga de porco",
          "queijo pecorino ralado",
        ],
        image: "http://receitasdeminuto.com/wp-content/uploads/2012/09/espaguete_a_carbonara_anglo_america.jpg",
        instructions:
          "Cozinhe o espaguete de acordo com as instruções da embalagem. Em uma tigela grande, misture os ovos e o queijo pecorino ralado. Em uma frigideira grande, cozinhe a barriga de porco em fogo médio até ficar crocante. Adicione o espaguete cozido à frigideira e misture com a barriga de porco. Retire a frigideira do fogo e despeje a mistura de ovos e queijo sobre o espaguete. Misture bem. Sirva imediatamente.",
      });

      const response = await request(app).get(`/recipes/${recipe._id}`);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(recipe.name);
    });

    it("should return 404 if recipe id is invalid", async () => {
      const response = await request(app).get(
        "/recipes/60b9cc9aebc6371b47"
      );
      expect(response.status).toBe(404);
      expect(response.body.error).toBe("Recipe not found");
    });
  });

  //TODO: Criar os testes para PUT e DELETE
});
