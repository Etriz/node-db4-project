const db = require("./db-config");

function findRecipes() {
  return db("recipes as r").select("r.id", "r.name");
}

const findRecipeById = (id) => {
  return db("recipes").where({ id }).first();
};

function getShoppingList(id) {
  return db("recipes as r")
    .where("r.id", id)
    .join("recipes-ingredients as b", "r.id", "b.recipe_id")
    .join("ingredients as i", "b.ingredient_id", "i.id")
    .select("i.name", "b.amount", "b.units");
}

function getInstructions(id) {
  return db("recipes as r")
    .where("r.id", id)
    .join("directions as d", "r.id", "d.recipe_id")
    .select("r.name", "d.step", "d.directions")
    .orderBy("d.step");
}

module.exports = { findRecipes, findRecipeById, getShoppingList, getInstructions };
