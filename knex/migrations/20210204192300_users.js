export const up = (knex) =>
  knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.text("name", 128).notNullable();
  });

export const down = (knex) => knex.schema.dropTableIfExists("users");
