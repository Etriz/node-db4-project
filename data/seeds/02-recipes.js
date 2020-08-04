exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    {
      name: "Rice Krispy Bars",
    },
    {
      name: "Gin and Tonic",
    },
  ]);
};
