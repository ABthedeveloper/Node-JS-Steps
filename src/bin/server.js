const {bootstrap} = require('../bootstrap');
const app = require('../../app.js');
const config = require('../config')

let server;
bootstrap().then(()=>{
    server = app.listen(config.PORT,()=>{
        console.log(`listening on server on ${config.PORT}`);
    })
})