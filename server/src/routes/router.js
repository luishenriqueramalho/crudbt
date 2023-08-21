module.exports = function (app) {
  const arenasController = require("../controllers/ArenasController");

  app
    .route("/api/arenas")
    .get(arenasController.listar_todas_arenas)
    .post(arenasController.add_nova_arena);
};
