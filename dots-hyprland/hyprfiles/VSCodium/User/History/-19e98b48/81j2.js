const mongoose = require('mongoose');

const ImovelSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  preco: { type: Number, required: true },
  quartos: { type: Number },
  banheiros: { type: Number },
  bairro: { type: String },
  fotos: { type: [String] } // Array de URLs das imagens
});

module.exports = mongoose.model('imovel', ImovelSchema);