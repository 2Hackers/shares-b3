const db = require('./db_extractor')
const _ = require('lodash')
const b3DataLoader = require('../../b3-data-loader/src')

db.connectToDB()

const companysToSave = (companys) => {
  const companysIds = Object.keys(companys)
  return companysIds.map(companyId => {
    return {
      id: db.generateMongooseId(),
      ...companys[companyId]
    }
  })
}

const historicalToSave = async (histories) => {
  const companysById = await _.keyBy(await db.models.company.find({}), 'codNeg')
  return histories.map(history => {
    return {
      company: companysById[history.codNeg],
      ...history
    }
  })
}

const salvar = async () => {
  const {companysName, companys, historicalData} = await b3DataLoader.dataLoad()

  await db.models.company.insertMany(companysToSave(companys))
  console.log('company finished')
  const historic = await historicalToSave(historicalData);
  await db.models.historical.insertMany(historic)
  console.log('historical finished')
}

db.cleanDB(salvar)

// Promise.all(downloadQueue);