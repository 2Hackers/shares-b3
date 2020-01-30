
const sharess = (_, args, ctx) => {
  return ctx.models.shares.find();
}

const createShares = (_, args, ctx) => {
  return ctx.models.shares.create(args.input)
}

const removeShares = (_, args, ctx) => {
  return ctx.models.shares.remove({_id: args.input.id})
}

module.exports = {
  Query: {
    sharess
  },
  Mutation: {
    createShares,
    removeShares
  },
  Historical: {
    company(historical, _, ctx) {
      return ctx.loaders.company.load(historical.company)
    }
  },
  Shares: {
    performance: async (shares, _, ctx) => {
      const company = await ctx.models.company.findOne({ codNeg: shares.codNeg });
      const historical = await ctx.models.historical
        .findOne( { company: company._id } )
        .sort({date: -1})
        .limit(1);
      return historical.closeValue * shares.quantity - shares.quantity * shares.value 
    }
  }
}
