exports.seed = function (knex) {
  return knex("recipes-ingredients").insert([
    { recipe_id: 1, ingredients_id: 1, amount: "3 tbs" },
    { recipe_id: 1, ingredients_id: 2, amount: "1 pkg" },
    { recipe_id: 1, ingredients_id: 3, amount: "6 cups" },
  ]);
};
