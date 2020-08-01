const crypto = require('crypto');
const connection = require('../database/connection');
module.exports={
  async index(request, response){
    const loja = await connection('loja').select('*');
    return response.json(loja);
  },
  async  create(request, response){
    const {nome, email, telefone, cidade, uf}=request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('loja').insert({
      id,
      nome,
      email,
      telefone,
      cidade,
      uf
    })
    return response.json({id});
  }
}