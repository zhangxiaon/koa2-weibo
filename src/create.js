const {Blog,User} = require('./model')
!(async function () {
//    创建用户
    const zhangsan = await User.create({
        username:'zhangsan',
        password:'123',
        nickname:'张三'
    })
    const Lisi = await User.create({
        username:'lisi',
        password:'234',
        nickname:'李四'
    })
    const Blog1 = await Blog.create({
        title:'博客1',
        content:'博客1',
        userId:'1'
    })
    const Blog2 = await Blog.create({
        title:'博客2',
        content:'博客2',
        userId:'2'
    })

    console.log('zhangsan',zhangsan.dataValues)
    console.log('Blog1',Blog1.dataValues)

})()


