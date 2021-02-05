const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  client: "postgresql",
  connection: {
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  migrations: {
    directory: "./knex/migrations",
  },
  seeds: { directory: "./knex/seeds" },
};
