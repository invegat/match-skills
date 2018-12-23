exports.up = function(knex, Promise) {
    return knex.schema.createTable('pkgUrls', function(tbl) {
      tbl
        .integer('pkgId')
        .references('id')
        .inTable('pkgs')
        .defaultTo('1');
      tbl
        .integer('urlId')
        .references('id')
        .inTable('urls')
        .defaultTo('1');   
      tbl.primary(['pkgId', 'urlId']);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('pkgUrls');
  };
  