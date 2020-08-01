exports.up = function(knex) {
    return knex.schema.createTable('loja', function(table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('telefone').notNullable();
      table.string('cidade').notNullable();
      table.string('uf',2).notNullable();
    })
};

exports.down = function(knex) {
  knex.schema.dropTable('loja');
};
