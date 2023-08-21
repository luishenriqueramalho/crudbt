const mongoose = require("mongoose");
const arena = mongoose.model("arena");

// Listar todas as arenas
exports.listar_todas_arenas = async (req, res) => {
  try {
    const arenas = await arena.find();
    res.status(200).json(arenas);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.add_nova_arena = async (req, res) => {
  try {
    const novaArena = new arena(req.body);
    await novaArena.save();
    res.status(201).send(novaArena.toJSON());
  } catch (error) {
    res.status(500).json(error);
  }
};

/* exports.add_nova_arena = function (req, res) {
  const nova_arena = new arena(req.body);
  nova_arena.save(function (err, arenas) {
    if (err) {
      res.send(err);
    }
    res.json(arenas);
  });
}; */

/* app.get('/livros', async (req, res) => {
  try {
      const livrosResultado = await livros.find();
      res.status(200).json(livrosResultado)
  } catch (err) {
      res.status(500).json(err);
  }
})*/
