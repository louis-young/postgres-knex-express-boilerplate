import express from "express";
import dotenv from "dotenv";
import knex from "./knex/knex.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

app.get("/users/:id", async (request, response) => {
  const { id } = request.params;

  const user = await knex("users").where({ id }).first();

  response.json(user);
});
