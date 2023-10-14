const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/v1', createProxyMiddleware({ 
    target: 'https://www.receitaws.com.br', 
    changeOrigin: true 
}));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
