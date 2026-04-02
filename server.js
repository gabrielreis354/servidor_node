import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Servidor Node.js</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            background-color: #1a1a2e;
            color: #e0e0e0;
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          .card {
            background-color: #16213e;
            border: 1px solid #333;
            border-radius: 12px;
            padding: 40px 48px;
            max-width: 560px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          }

          .badge {
            display: inline-block;
            background-color: #3c873a;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 20px;
            margin-bottom: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          h1 {
            font-size: 26px;
            color: #68a063;
            margin-bottom: 8px;
          }

          p {
            color: #aaa;
            margin-bottom: 24px;
            font-size: 15px;
          }

          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          li {
            background-color: #0f3460;
            border-radius: 8px;
            padding: 14px 18px;
            font-size: 14px;
          }

          .method {
            font-weight: bold;
            padding: 2px 8px;
            border-radius: 4px;
            margin-right: 8px;
            font-size: 12px;
          }

          .get  { background-color: #3c873a; color: #fff; }
          .post { background-color: #e8a838; color: #1a1a2e; }

          a {
            color: #68a063;
            text-decoration: none;
          }

          a:hover { text-decoration: underline; }

          code {
            background-color: #1a1a2e;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 13px;
            color: #e8a838;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="badge">Node.js + Express</span>
          <h1>Servidor rodando!</h1>
          <p>Use as rotas abaixo para interagir com a API:</p>
          <ul>
            <li>
              <span class="method get">GET</span>
              <a href="/api?nome=Gabriel">/api?nome=Gabriel</a>
            </li>
            <li>
              <span class="method post">POST</span>
              <code>/api</code> com body <code>{"nome":"Gabriel"}</code>
            </li>
          </ul>
        </div>
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
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
