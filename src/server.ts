import { App } from './app';
import { connect } from './config/database';
import { RecipeRoutes } from './routes/index';

const PORT = process.env.PORT || 3000;

const app = new App().app;
const recipeRoutes = new RecipeRoutes().router;

app.use('/recipes', recipeRoutes);

// Adicionando rota de exemplo
/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */





connect();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Capturando erros não tratados
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection at", promise, "reason:", reason);
});
