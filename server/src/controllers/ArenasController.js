const mongoose = require("mongoose");
const arena = mongoose.model("arena");

// Listar todas as arenas
exports.listar_todas_arenas = async (req, res) => {
  try {
    const arenas = await arena.find();
    res.status(200).json({
      success: true,
      message: null,
      status: 200,
      data: arenas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro ao consultar as arenas",
      status: 500,
      data: null,
    });
  }
};

exports.add_nova_arena = async (req, res) => {
  try {
    const novaArena = new arena(req.body);
    await novaArena.save();
    res.status(201).json({
      success: true,
      message: "Arena criada com sucesso!",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Erro ao cadastrar arena!",
      status: 500,
    });
  }
};

exports.deletar_arena = async (req, res) => {
  try {
    const { arenaId } = req.params;
    const del = await arena.findByIdAndDelete(arenaId);
    res.status(200).json({
      success: true,
      message: "Arena deletada com sucesso!",
      data: del,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Não foi possível deleta a arena!",
      data: null,
    });
  }
};
