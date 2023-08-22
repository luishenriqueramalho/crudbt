const mongoose = require("mongoose");
const atleta = mongoose.model("atleta");

// Listar todos os atletas
exports.listar_todos_atletas = async (req, res) => {
  try {
    const atletas = await atleta.find();
    res.status(200).json({
      success: true,
      message: null,
      status: 200,
      data: atletas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro ao consultar os atletas",
      status: 500,
      data: null,
    });
  }
};

exports.add_novo_atleta = async (req, res) => {
  try {
    const novoAtleta = new atleta(req.body);
    await novoAtleta.save();
    res.status(201).json({
      success: true,
      message: "Atleta criado com sucesso!",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Erro ao cadastrar o atleta!",
      status: 500,
    });
  }
};

exports.deletar_atleta = async (req, res) => {
  try {
    const { atletaId } = req.params;
    const del = await arena.findByIdAndDelete(atletaId);
    res.status(200).json({
      success: true,
      message: "AStleta deletado com sucesso!",
      data: del,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Não foi possível deleta o atleta!",
      data: null,
    });
  }
};
