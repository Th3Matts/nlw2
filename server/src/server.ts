import express from 'express';
import cors from 'cors';
import routes from './routes';

 
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//qual o endereço que o usuário
//  http://localhost:3333/users => rota dos usuários
//  http://localhost:3333/contacts => contatos

//métodos disponíveis: 
//GET: Buscar ou listar uma info.
//POST: Criar uma info nova.
//PUT: Att uma info.
//DELETE: Deletar uma info.

// Corpo (Request body): dados para criação ou att de um registro.
// Route Params: identifica qual recurso att ou deletar.
// Query Params: Listagem, paginação, filtros, ordenação

//escuta a porta do endereço ex: localhost:*3333*