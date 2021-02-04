export const seed = (knex) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        { id: 1, name: "John" },
        { id: 2, name: "Alan" },
        { id: 3, name: "Alex" },
      ]);
    });
};
