const DataLoader = require('dataloader')
const Company = require('./company/company.model')
const Historical = require('./historical/historical.model')
const _ = require('lodash')

createCompanyLoader = () => {
  return new DataLoader(companysId => {
    return Company.find({_id: { $in: companysId }})
      .then(companys => {
        console.log('here we access database')
        const companysById = _.keyBy(companys, '_id')
        return companysId.map(companyId => companysById[companyId])
      });
  })
}

createHistoricalLoader = () => {
  return new DataLoader(companysId => {
    return Company.find({_id: { $in: companysId }})
      .then(companys => {
        console.log('here we access database')
        const companysById = _.keyBy(companys, '_id')
        return companysId.map(companyId => companysById[companyId])
      });
  })
}

module.exports = () => {
  return {
    company: createCompanyLoader(),
    historical: createHistoricalLoader()
  }
}
