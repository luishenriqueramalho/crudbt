module.exports = function (app) {
  const arenasController = require("../controllers/ArenasController");
  const atletasController = require("../controllers/AtletasController");

  app
    .route("/api/arenas")
    .get(arenasController.listar_todas_arenas)
    .post(arenasController.add_nova_arena);

  app
    .route("/api/atletas")
    .get(atletasController.listar_todos_atletas)
    .post(atletasController.add_novo_atleta);
};
