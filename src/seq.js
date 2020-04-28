const Sequelize = require('sequelize')

const conf = {
    host:'localhost',
    dialect:'mysql'
}
// conf.pool = {
//     max:5, //连接池最大连接数量
//     min:0,
//     idle:10000 //如果连接超过10秒没有被使用 则释放
// }

const seq = new Sequelize('koa2_weibo_db','root','Mysql_2018',conf)




module.exports = seq
