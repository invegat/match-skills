exports.up = function(knex, Promise) {
    return knex.schema.createTable('groupUrls', function(tbl) {
      tbl
        .integer('groupId')
        .references('id')
        .inTable('groups')
        .defaultTo('1');
      tbl
        .integer('urlId')
        .references('id')
        .inTable('urls')
        .defaultTo('1');   
      tbl.primary(['groupId', 'urlId']);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('groupUrls');
  };