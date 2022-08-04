const {Sequelize} = require('sequelize')

const sequelize=new Sequelize('node-complete','root','123@Hello',{
    dialect:'mysql',
    host: 'localhost'
})

module.exports=sequelize;