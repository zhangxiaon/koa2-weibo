const seq = require('./seq')

require('./model')

//测试连接
seq.authenticate().then( () => {
    console.log('ok')
}).catch(()=>{
    console.log('error')
})

//执行同步
seq.sync({force:true}).then(()=>{
    console.log('sync ok')
    process.exit()
})


