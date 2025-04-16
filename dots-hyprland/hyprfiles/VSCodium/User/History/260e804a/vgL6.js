const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static('public'));

// Rota da página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/novo-curso', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'novo_curso.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
