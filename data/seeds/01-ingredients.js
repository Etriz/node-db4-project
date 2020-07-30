exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { name: "butter" },
    { name: "marshmallows" },
    { name: "rice krispies" },
  ]);
};
