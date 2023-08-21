import fastify from "fastify";
import { AtletasRoutes } from "./routes/atletas";
import { ArenasRoutes } from "./routes/arenas";

const app = fastify();

app.register(AtletasRoutes);
app.register(ArenasRoutes);

app.listen({ port: 3333 }).then((dev) => {
  console.log("Servidor ligado", dev);
});
