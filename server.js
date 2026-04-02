import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Servidor Node.js</title></head>
      <body>
        <h1>Servidor Node.js com Express</h1>
        <p>Use as rotas abaixo para interagir com a API:</p>
        <ul>
          <li><strong>GET</strong> → <a href="/api?nome=Luan">/api?nome=Luan</a></li>
          <li><strong>POST</strong> → <code>/api</code> com body <code>{"nome":"Luan"}</code></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/api', (req, res) => {
  const { nome } = req.query;
  res.json({ mensagem: `Olá, ${nome}!` });
});

app.post('/api', (req, res) => {
  const { nome } = req.body;
  res.json({ mensagem: `Olá, ${nome}!` });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/api?nome=Gabriel`);
});
