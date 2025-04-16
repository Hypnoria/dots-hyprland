const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conecta ao MongoDB (configure no .env)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch(err => console.error("Erro ao conectar:", err));

// Rota de teste
app.get('/', (req, res) => {
  res.send("API da Imobiliária Funcionando!");
});

app.use(express.json()); // Para parsear JSON
app.use('/api/imoveis', require('./routes/imoveisRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
