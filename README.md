# Learning-Sequelize_Postgres
Projeto de aprendizado da utilização da ORM Sequelize para banco de dados PostgreSQL

## Etapas
### No terminal

```$ npm init -y```

```$ npm install sequelize pg pg-hstore express```

```$ npm install -g sequelize-cli```

```$ sequelize-cli init```

### Na pasta config
- Criação do arquivo "config.js"
código:

```
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
```

### No terminal

```$ sequelize db:create```

### Criação do documento na pasta Migrations

```$ sequelize migration:create --name=planets```
- Criação da tabela Planets
- Código:

```module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planets', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('planets');
  }
}; 
```


### Para rodar a Migration

```
$ sequelize db:migrate
```

### Próximos passos
- Transformando em uma API;
- Aplicar em um projeto;
