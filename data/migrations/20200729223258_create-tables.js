exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("directions").notNullable();
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
        .integer("ingredients_id")
        .notNullable()
        .unsigned()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("amount").notNullable().unsigned();
      tbl.primary(["recipe_id", "ingredients_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes-ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
