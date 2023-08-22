const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const atletaSchema = Schema({
  nome: { type: String },
  dataNascimento: { type: String },
  maoDominante: { type: String },
  raquete: { type: String },
  arena: { type: String },
  sexo: { type: String },
});

module.exports = mongoose.model("atleta", atletaSchema);
