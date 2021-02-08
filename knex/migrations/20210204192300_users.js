export const up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("email").unique().notNull();
    table.text("password").notNull();
  });

export const down = (knex) => knex.schema.dropTableIfExists("users");
