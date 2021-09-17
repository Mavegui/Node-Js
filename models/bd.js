const Sequelize = require('sequelize')
const sequelize = new Sequelize ('post', 'root', '98364174', {
  host:'localhost',
  dialect:'mysql'
})

module.exports={
  Sequelize: Sequelize,
  sequelize: sequelize
}
