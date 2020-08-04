exports.seed = function (knex, Promise) {
  return knex("directions").insert([
    { directions: "melt butter", recipe_id: "1", step: "1" },
    { directions: "add marshmallows and stir", recipe_id: "1", step: "2" },
    { directions: "add rice krispies and stir", recipe_id: "1", step: "3" },
    { directions: "put in pan and let cool", recipe_id: "1", step: "4" },
    { directions: "mix gin and tonic", recipe_id: "2", step: "1" },
    { directions: "drink", recipe_id: "2", step: "2" },
  ]);
};
