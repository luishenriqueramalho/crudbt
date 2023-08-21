-- CreateTable
CREATE TABLE "Atletas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "dataNiver" TEXT NOT NULL,
    "maoDominante" TEXT NOT NULL,
    "raquete" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "arenasId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Arenas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "dataInicio" TEXT NOT NULL,
    "totalQuadras" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL PRIMARY KEY
);
