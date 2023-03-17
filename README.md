# Learning-Sequelize_Postgres
Projeto de aprendizado da utilização da ORM Sequelize para banco de dados PostgreSQL

## Etapas
### No terminal
- $ npm init -y
- $ npm install sequelize pg pg-hstore express
- $ npm install -g sequelize-cli
- $ sequelize-cli init

### Na pasta config
- Criação do arquivo "config.js"
código:

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123456", // senha criada ao instalar o psql
  database: "curso_sequelize",
  define: {
    timestamps: true,
  },
};

### No terminal
$ sequelize db:create
