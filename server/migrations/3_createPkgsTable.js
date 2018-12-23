exports.up = function(knex, Promise) {
    return knex.schema.createTable('pkgs', function(tbl) {
      tbl.increments('id').primary(); // primary key
  
      tbl
        .string('pkg', 128)
        .notNullable()
        .unique('pkg');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('pkgs');
  };
  