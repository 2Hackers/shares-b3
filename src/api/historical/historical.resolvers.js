
const historicals = (_, args, ctx) => {
  return ctx.models.historical.find({company: args.input.id}).sort('date')
}

module.exports = {
  Query: {
    historicals
  },
  Historical: {
    company(historical, _, ctx) {
      return ctx.loaders.company.load(historical.company)
    }
  }
}
