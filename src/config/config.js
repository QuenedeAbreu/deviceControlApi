
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    host: "localhost",
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    logging: true
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    host: "localhost",
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    logging: true
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    host: "localhost",
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    logging: true
  }
};