const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running. Use /v1/cnpj/{cnpj} to access the CNPJ information.');
});

// Configuração do proxy
app.use('/v1/cnpj', createProxyMiddleware({ 
    target: 'https://www.receitaws.com.br/v1/cnpj', 
    changeOrigin: true,
    pathRewrite: {
        '^/v1/cnpj': '', 
    },
}));

module.exports = app;
