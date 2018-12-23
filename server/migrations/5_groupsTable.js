exports.up = function(knex, Promise) {
    return knex.schema.createTable('groups', function(tbl) {
      tbl.increments('id').primary(); // primary key
  
      tbl
        .string('description', 512)
        .notNullable()
        .unique('description');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('groups');
  };