import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function ArenasRoutes(app: FastifyInstance) {
  app.get("/api/arenas", async () => {
    try {
      const arenas = await prisma.arenas.findMany({
        orderBy: [
          {
            id: "asc",
          },
        ],
      });
      const data = {
        success: true,
        message: null,
        data: arenas,
      };
      return data;
    } catch (error) {
      const data = {
        success: true,
        message: "Erro ao consultar as arenas!",
        data: null,
      };
      return data;
    }
  });
}
