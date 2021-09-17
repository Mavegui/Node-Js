const bd = require('./bd')
const metodo = bd.sequelize.define('historia', {
  nome:{
    type: bd.Sequelize.STRING
  },
  conto: {
    type: bd.Sequelize.STRING
  }
})

module.exports=metodo
//metodo.sync({force: true})
