const express = require('express');
const app = express();

// Definindo a rota raiz
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Definindo a porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
