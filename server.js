import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  const { nome } = req.query;
  res.json({ mensagem: `Olá, ${nome}!` });
});

app.post('/api', (req, res) => {
  const { nome } = req.body;
  res.json({ mensagem: `Olá, ${nome}!` });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
