exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    {
      name: "Rice Krispy Bars",
      directions:
        "Melt butter, add marshmallows and stir. Add rice krispies and stir. Put in pan and let cool",
    },
  ]);
};
