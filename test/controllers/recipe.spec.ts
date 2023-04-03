import request, { Test } from "supertest";
import { App } from "../../src/app";
import { connect } from "../../src/config/database";
import { Recipe } from "../../src/models/recipe";

const app = new App().app;

describe("RecipeController", () => {
  beforeAll(async () => {
    await connect();
  });

  afterAll(async () => {
    await Recipe.deleteMany({});
  });

  describe("GET /api/recipes", () => {
    it("should return an empty array", async () => {
      const response = await request(app).get("/api/recipes");
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  // Implementar os demais testes para os outros métodos do controller
});
