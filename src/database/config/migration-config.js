// eslint-disable-next-line @typescript-eslint/no-var-requires
// require('dotenv').config({ path: `.env.development` });
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const migrationConfig = {
  development: {
    dialect: process.env.DIALECT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    autoLoadModels: true,
    synchronize: false,
  },
  test: {
    dialect: process.env.DIALECT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    autoLoadModels: true,
    synchronize: false,
  },
  production: {
    dialect: process.env.DIALECT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    autoLoadModels: true,
    synchronize: false,
  },
};

module.exports = migrationConfig;
