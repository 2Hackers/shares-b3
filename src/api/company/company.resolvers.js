const company = (_, args, ctx) => {
    return ctx.models.company.find({codNeg: args.input.code})
}

const companys = (_, args, ctx) => {
  return ctx.models.company.find()
}
module.exports = {
    Query: {
        companys,
        company
    },
    Company: {
      historical : (company, args, ctx) => {
        const { from , to } = args.input;
        return ctx.models.historical.find({company: company._id, date: { $gt: from, $lt: to }})}
    }
}
