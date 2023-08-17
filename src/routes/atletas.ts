import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function AtletasRoutes(app: FastifyInstance) {
  app.get("/api/atletas", async () => {
    try {
      console.log("caiu no try");
      return "Caiu nos atletas";
    } catch (error) {
      console.log("caiu no catch");
    }
  });
}
