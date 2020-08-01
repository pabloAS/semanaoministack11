const connection = require('../database/connection');
module.exports={
  async create(request, response){
    const {id} = request.body;
    const loja = await connection('loja').where('id',id).select('nome').first();
    if(!loja){
      return response.status(400).json({error:'Não existe loja com esse id'});
    }
    return response.json(loja);
  }
}