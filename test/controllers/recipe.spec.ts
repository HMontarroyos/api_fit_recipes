import request, { Test } from "supertest";
import { App } from "../../src/app";
import { connect } from "../../src/config/database";
import  Recipe  from "../../src/models/recipe";

const app = new App().app;

describe("RecipeController", () => {
  beforeAll(async () => {
    await connect();
  });

  afterAll(async () => {
    await Recipe.deleteMany({});
  });

  describe("GET /recipes", () => {
    it("should return an empty array", async () => {
      const response = await request(app).get("/api/recipes");
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('Recipe', () => {
    it('should be able to create a new recipe', async () => {
      const response = await request(app).post('/recipes').send({
        name: 'Lasagna',
        description: 'A classic Italian pasta dish',
        ingredients: [
          'lasagna noodles',
          'ground beef',
          'tomato sauce',
          'ricotta cheese',
          'mozzarella cheese',
          'parmesan cheese',
        ],
        instructions:
          'Preheat oven to 375 degrees F. Cook the lasagna noodles according to package instructions. In a large skillet over medium heat, brown the ground beef. Add the tomato sauce and simmer for 10 minutes. In a medium bowl, mix together the ricotta cheese, 1 cup of mozzarella cheese, and 1/2 cup of parmesan cheese. Spread a layer of the tomato sauce mixture on the bottom of a 9x13 inch baking dish. Arrange a layer of the cooked lasagna noodles on top of the sauce. Spread a layer of the cheese mixture on top of the noodles. Repeat the layers, ending with a layer of the tomato sauce mixture. Top with the remaining mozzarella and parmesan cheeses. Bake for 25 to 30 minutes, or until the cheese is melted and bubbly.',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('_id');
    });

    it('should be able to list all recipes', async () => {
      const response = await request(app).get('/recipes');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  // Implementar os demais testes para os outros métodos do controller
});
