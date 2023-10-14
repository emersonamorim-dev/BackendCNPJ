const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('https://backend-cnpj.vercel.app/');
const middlewares = jsonServer.defaults();

app.use(cors());
app.use(middlewares);

app.get('/', (req, res) => {
    console.log('Acessando a rota base');
    res.type('text/html');
    res.send('Server is running. Use /v1/cnpj/{cnpj} to access the CNPJ information.');
});

app.get('/', (req, res) => {
    const declaredVariable = "Teste!";
    res.send(declaredVariable);
});


// Configuração do proxy
app.use('/v1/cnpj', (req, res, next) => {
    console.log('Acessando a rota do proxy');
    next();
}, createProxyMiddleware({ 
    target: 'https://www.receitaws.com.br/v1/cnpj', 
    changeOrigin: true,
    pathRewrite: {
        '^/v1/cnpj': '', 
    },
    logLevel: 'debug', 
}));

// Configuração do json-server
app.use(jsonServer.rewriter({
    '/cnpj/*': '/$1',
}));
app.use(router);

module.exports = app;