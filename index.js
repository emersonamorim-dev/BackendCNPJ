const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

app.use('/v1', createProxyMiddleware({ 
    target: 'https://www.receitaws.com.br', 
    changeOrigin: true 
}));

module.exports = app;
