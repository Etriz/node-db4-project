exports.seed = function (knex) {
  return knex("recipes-ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, amount: "3", units: "tbs" },
    { recipe_id: 1, ingredient_id: 2, amount: "1", units: "pkg" },
    { recipe_id: 1, ingredient_id: 3, amount: "6", units: "cups" },
    { recipe_id: 2, ingredient_id: 4, amount: "2", units: "oz" },
    { recipe_id: 2, ingredient_id: 5, amount: "4", units: "oz" },
  ]);
};
