const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

// Middleware para definir o Content-Type como JSON
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Rota padrão
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo ao servidor! Use /v1 para acessar o proxy.' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
