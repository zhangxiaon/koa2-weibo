const {User} = require('./model')

!(async function () {
    const updatezhangsan = await User.update({
        nickName: 'zhangsan1',
    },{
        where:{
            userName:'zhangsan'
        }
    })
    console.log('updatezhangsan',updatezhangsan)
})()
