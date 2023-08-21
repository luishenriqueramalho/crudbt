const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arenaSchema = Schema({
  nome: { type: String },
  dataInicio: { type: String },
  totalQuadras: { type: String },
  endereco: { type: String },
  bairro: { type: String },
  cidade: { type: String },
  estado: { type: String },
});

module.exports = mongoose.model("arena", arenaSchema);
