const db = require('./db')
const helper = require('../helper')
const config = require('../config')


async function getDeval (req, res) {

 const rows = await db.query(
 'SELECT * FROM devaluacion'
)
const data = helper.emptyOrRows(rows)
return {
 data
 }
}

module.exports = {
    getDeval
 
}
