exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
    })
    .createTable("directions", (tbl) => {
      tbl.increments();
      tbl.string("directions").notNullable();
      tbl.integer("recipe_id").references("recipes.id").onDelete("CASCADE").onUpdate("CASCADE");
      tbl.integer("step").notNullable().unsigned();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
    })
    .createTable("recipes-ingredients", (tbl) => {
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("amount").notNullable().unsigned();
      tbl.string("units").notNullable().unsigned();
      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes-ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("directions")
    .dropTableIfExists("recipes");
};
