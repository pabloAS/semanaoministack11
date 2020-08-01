exports.up = function(knex) {
  return knex.schema.createTable('cardapio', function(table){
    table.increments();
    table.string('titulo').notNullable();
    table.string('descricao').notNullable();
    table.decimal('valor').notNullable();

    table.string('loja_id').notNullable();
    table.foreign('loja_id').references('id').inTable('loja');
  });  
};

exports.down = function(knex) {
  knex.schema.dropTable('cardapio');
};
