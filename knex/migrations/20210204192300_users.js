exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("name", 128).notNull();
    table.text("email", 128).unique().notNull();
  });

exports.down = (knex) => knex.schema.dropTableIfExists("users");
