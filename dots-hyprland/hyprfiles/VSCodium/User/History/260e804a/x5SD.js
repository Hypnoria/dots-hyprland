const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'see')));

// Definindo a rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Definindo a porta do servidor
const PORT = 2888;  // Altere para a porta desejada
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
