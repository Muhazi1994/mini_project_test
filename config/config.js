
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });


console.log(process.env.NODE_ENV);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_DATABASE);

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
  },
  "test": {
    username: "postgres",
    password: "P@ssw0rd",
    database: "development_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  "production": {
    username: "postgres",
    password: "P@ssw0rd",
    database: "development_production",
    host: "127.0.0.1",
    dialect: "postgres",
  }
}
