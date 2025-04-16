const Imovel = require('../models/Imovel');

exports.listarImoveis = async (req, res) => {
  try {
    const imoveis = await Imovel.find();
    res.json(imoveis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.criarImovel = async (req, res) => {
  const imovel = new Imovel(req.body);
  try {
    const novoImovel = await imovel.save();
    res.status(201).json(novoImovel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
