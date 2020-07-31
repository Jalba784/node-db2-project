
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", cr => {
      cr.increments("id")
      cr.text("vin").notNullable()
      cr.text("make").notNullable()
      cr.text("model").notNullable()
      cr.integer("mileage").notNullable()
      cr.boolean("automatic").defaultTo(true)
      cr.text("title")
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cars")
};
