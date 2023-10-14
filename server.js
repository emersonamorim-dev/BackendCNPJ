const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

app.use('/v1', createProxyMiddleware({ 
    target: 'https://www.receitaws.com.br', 
    changeOrigin: true 
}));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
