import fastify from "fastify";
import { AtletasRoutes } from "./routes/atletas";

const app = fastify();

app.register(AtletasRoutes);

app.get("/", () => {
  return "Teste";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Servidor ligado");
});
