const {User,Blog} = require('./model')

!(async function () {
//   删除
    const delBlogRes = await Blog.destroy({
        where:{
            id:1
        }
    })
    console.log('delBlogRes',delBlogRes)
})()

