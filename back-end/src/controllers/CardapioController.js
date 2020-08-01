const connection = require('../database/connection');
module.exports={
  async index(request, response){
    const {page = 1} = request.query;
    const [count] = await connection('cardapio').count();
    
    const cardapio = await connection('cardapio')
    .join('loja', 'loja.id','=','cardapio.loja_id')
    .limit(5)
    .offset((page - 1 )*5)
    .select([
      'cardapio.*',
      'loja.nome',
      'loja.email',
      'loja.telefone',
      'loja.cidade',
      'loja.uf']);
    response.header('X-Total-Count',count['count(*)']);
    return response.json(cardapio);
  },
  async create(request, response){
    const {titulo, descricao, valor} = request.body;
    const loja_id = request.headers.authorization;

    const [id] = await connection('cardapio').insert({
      titulo,
      descricao,
      valor,
      loja_id
    });
    return response.json({id});
  },
  async delete(resquest, response){
    const {id} = resquest.params;
    const loja_id = resquest.headers.authorization;
    const cardapio = await connection('cardapio').where('id', id).select('loja_id').first();
    if(cardapio.loja_id !=  loja_id){
      return response.status(401).json({error:'Operação não é permitida.'});
    }
    await connection('cardapio').where('id',id).delete();
    return response.status(204).send();
  }
}