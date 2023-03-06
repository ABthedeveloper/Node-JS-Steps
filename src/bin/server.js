const {bootstrap} = require('../bootstrap');
const app = require('../../app.js');
const config = require('../config')

bootstrap().then(()=>{
    let server;
    server = app.listen(config.PORT,()=>{
        console.log(`listening on server on ${config.PORT}`);
    })
})