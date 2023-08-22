module.exports = function (app) {
  const arenasController = require("../controllers/ArenasController");
  const atletasController = require("../controllers/AtletasController");

  // Arenas
  app
    .route("/api/arenas")
    .get(arenasController.listar_todas_arenas)
    .post(arenasController.add_nova_arena);
  app.route("/api/arenas/:arenaId").delete(arenasController.deletar_arena);

  // Atletas
  app
    .route("/api/atletas")
    .get(atletasController.listar_todos_atletas)
    .post(atletasController.add_novo_atleta);
  app.route("api/atletas/:atletaId").delete(atletasController.deletar_atleta);
};
