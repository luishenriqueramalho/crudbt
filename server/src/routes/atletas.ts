import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function AtletasRoutes(app: FastifyInstance) {
  app.get("/api/atletas", async () => {
    try {
      const atletas = await prisma.atletas.findMany({
        orderBy: [
          {
            id: "asc",
          },
        ],
      });
      const data = {
        success: true,
        message: null,
        data: atletas,
      };
      return data;
    } catch (error) {
      const data = {
        success: true,
        message: "Erro ao consultar os atletas!",
        data: null,
      };
      return data;
    }
  });
}
