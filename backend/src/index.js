const express = require('express');
const routes = require('./routes');
const cors = requeri('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

/** 
 * Rotas / recursos
 * 
*/

/**
 * Metodos HTTP:
 * GET: buscar informação do backend
 * POST: cria uma informação para o backend
 * PUT: Altera uma informação do backend
 * DELETE: Deletar uma informação do backend
 */

 /**
  * Topos de parámetros:
  * 
  * Query Params[request.query]: parametros nomeados enviados na rota após simbolo de "?"(filtros, paginação)
  * Route Params[request.params](retorna 1): Parãmetros utilizados para identificar recursos
  * Request Body[request.body]: corpo da requisição, utilizado para criar ou alterar recursos.
  */

  /**
   * SQL: MySQL, SQLite, POSTGRESQL, Oracle, MsSql.
   * NoSQL: MongoDB, CouchDB
   */

    /**
    * Driver: Select * from
    * QueryBuilder: table('users').select('*').where()
    */

