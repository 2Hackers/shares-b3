const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
  codNeg: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  marketType: {
    type: String,
    required: true,
    enum: [
        10,12,13,17,20,30,50,60,70,80,
    ]
    // enum: [
    //   'VISTA',
    //   'EXERCICIO DE OPÇÕES DE COMPRA',
    //   'EXERCICIO DE OPÇÕES DE VENDA',
    //   'LEILÃO',
    //   'FRACIONÁRIO',
    //   'TERMO',
    //   'FUTURO COM RETENÇÃO DE GANHO',
    //   'FUTURO COM MOVIMENTAÇÃO CONTÍNUA',
    //   'OPÇÕES DE COMPRA',
    //   'OPÇÕES DE VENDA',
    // ]
  },
}, {timestamps: true})

companySchema.index({codNeg: 'text'});

module.exports = mongoose.model('task', companySchema)
