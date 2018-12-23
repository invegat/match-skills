exports.up = function(knex, Promise) {
    return knex.schema.createTable('urls', function(tbl) {
      tbl.increments('id').primary(); // primary key
  
      tbl
        .string('url', 254)
        .notNullable()
        .unique('url');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('urls');
  };
  