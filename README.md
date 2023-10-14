## BackendCNPJ - Consulta de CNPJ 🚀 🔄 🌐

Codificação de uma aplicação Node.js que utiliza o framework Express para criar Backend em para Consulta de CNPJ. Ele também utiliza o middleware http-proxy-middleware para criar um proxy que redireciona 
requisições para uma API externa. A aplicação é particularmente útil para contornar as restrições de CORS (Cross-Origin Resource Sharing) ao acessar APIs de domínios diferentes.

### Como Funciona

##### Importação de Módulos:

- express: Utilizado para criar o servidor web.
- cors: Middleware para habilitar CORS.
- http-proxy-middleware: Utilizado para criar um proxy para a API externa.

##### Inicialização do App Express:

O aplicativo Express é inicializado e o middleware CORS é aplicado para permitir requisições cross-origin.
Middleware para Content-Type:

Um middleware personalizado é aplicado para garantir que todas as respostas tenham o cabeçalho Content-Type definido como application/json.
Rota Padrão:

- Uma rota GET padrão é definida para a raiz do servidor, retornando uma mensagem de boas-vindas em formato JSON.
  
#### Configuração do Proxy:

- O middleware de proxy é configurado para interceptar requisições feitas para /v1/cnpj/:cnpj e redirecioná-las para a API externa https://backend-cnpj.vercel.app/v1/cnpj/SEUCNPJ
- O método changeOrigin é definido como true para garantir que o host da API externa seja virtualizado, permitindo que o proxy funcione corretamente.
- O método pathRewrite é utilizado para reescrever a URL da requisição, removendo a parte /v1/cnpj da URL antes de redirecioná-la para a API externa.
- O método onProxyRes é utilizado para garantir que o cabeçalho Content-Type da resposta seja definido como application/json;charset=utf-8.

#### Como rodar aplicação de forma local:

````
npm install
````
#### Instalação de Pacores:
```
npm install express cors http-proxy-middleware json-server
```
#### Rode o seguinte comando para subir aplicação:
```
node index.js
```

Para fazer o deploy deste aplicativo na Vercel, você precisa garantir que o arquivo vercel.json esteja configurado corretamente para tratar este aplicativo como uma função do servidor. 
Certifique-se também de que as dependências necessárias (express, cors, http-proxy-middleware) estejam listadas no arquivo package.json e que você tenha scripts adequados para iniciar o aplicativo.


## Autor:
Emerson Amorim
