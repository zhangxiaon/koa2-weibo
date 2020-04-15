const Sequelize = require("sequelize")
const seq = require("./seq")

//创建user表
const User = seq.define('user',{
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nickName:{
        type:Sequelize.STRING,
        comment:"昵称"
    }
})

//创建Blog表
const Blog = seq.define('blog',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    content:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

//创建外键
Blog.belongsTo(User,{
    foreignKey:'userId'
})

User.hasMany(Blog,{
    foreignKey:'userId'
})

module.exports = {
    User,
    Blog
}

