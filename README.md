# Servidor Node.js com Express

Projeto desenvolvido para praticar a criação de servidores HTTP com Node.js e Express, trabalhando com rotas GET e POST.

---

## Como funciona um servidor Node.js?

Um servidor HTTP funciona como um **atendente**: ele fica "escutando" em uma porta esperando requisições chegarem. Quando uma chega, ele processa e devolve uma resposta.

No Node.js, isso é feito de forma **assíncrona e não bloqueante** — ou seja, o servidor consegue atender várias requisições ao mesmo tempo sem travar, pois ele não espera uma terminar para começar a próxima.

```
Cliente (browser/curl)
        |
        |  requisição HTTP (GET, POST, PUT, DELETE...)
        ↓
  Servidor Node.js
        |
        |  processa a rota
        ↓
  Resposta HTTP (JSON, HTML, texto...)
        |
        ↓
Cliente recebe a resposta
```

---

## O que é o Express?

O **Express** é um framework minimalista para Node.js que facilita:

- Definir **rotas** (GET, POST, PUT, DELETE)
- Ler dados da requisição (`req.query`, `req.body`, `req.params`)
- Enviar respostas (`res.json()`, `res.send()`)
- Usar **middlewares** (funções que processam a requisição antes de chegar na rota)

Sem o Express, seria necessário usar o módulo nativo `http` do Node, que exige muito mais código para fazer a mesma coisa.

---

## Métodos HTTP

| Método | Onde ficam os dados | Uso comum |
|--------|---------------------|-----------|
| GET    | URL (`?chave=valor`) | Buscar dados |
| POST   | Corpo da requisição (body) | Enviar/criar dados |
| PUT    | Corpo da requisição (body) | Atualizar dados |
| DELETE | URL ou body | Deletar dados |

---

## Estrutura do Projeto

```
server_nodejs/
├── server.js       # arquivo principal do servidor
├── package.json    # configurações e dependências do projeto
└── .gitignore      # arquivos ignorados pelo git
```

---

## Implementação

### `package.json` — configuração do projeto

```json
{
  "type": "module"
}
```

O campo `"type": "module"` habilita o uso da sintaxe **ESM (ES Modules)** — o padrão moderno do JavaScript, que usa `import/export` em vez de `require/module.exports`.

---

### `server.js` — o servidor

```js
import express from 'express';

const app = express();
const PORT = 3000;
```

Importa o Express e cria a instância do servidor. A porta `3000` é onde o servidor vai escutar.

---

```js
app.use(express.json());
```

**Middleware** que interpreta automaticamente o corpo das requisições no formato JSON e disponibiliza os dados em `req.body`. Sem ele, o POST não consegue ler os dados enviados.

---

```js
app.get('/api', (req, res) => {
  const { nome } = req.query;
  res.json({ mensagem: `Olá, ${nome}!` });
});
```

Rota **GET** no caminho `/api`. Os dados chegam pela **URL** como query params (`?nome=Luan`). O Express os disponibiliza em `req.query`.

---

```js
app.post('/api', (req, res) => {
  const { nome } = req.body;
  res.json({ mensagem: `Olá, ${nome}!` });
});
```

Rota **POST** no mesmo caminho `/api`. Os dados chegam no **corpo (body)** da requisição em formato JSON. O Express os disponibiliza em `req.body` (graças ao middleware `express.json()`).

---

```js
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Inicializa o servidor na porta definida. O callback é executado assim que o servidor estiver pronto.

---

## Como rodar o projeto

**Pré-requisitos:** Node.js instalado

```bash
# Instalar dependências
npm install

# Iniciar o servidor
node server.js
```

---

## Como testar

### GET — dados pela URL

```bash
curl "http://localhost:3000/api?nome=Luan"
```

Ou direto no browser:
```
http://localhost:3000/api?nome=Luan
```

### POST — dados pelo body

```bash
curl -X POST http://localhost:3000/api \
  -H "Content-Type: application/json" \
  -d '{"nome":"Luan"}'
```

### Resposta esperada (nos dois casos)

```json
{ "mensagem": "Olá, Luan!" }
```

---

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
