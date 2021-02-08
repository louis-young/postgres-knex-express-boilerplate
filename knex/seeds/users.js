export const seed = (knex) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        { email: "john@domain.tld" },
        { email: "alan@domain.tld" },
        { email: "bob@domain.tld" },
      ]);
    });
};
