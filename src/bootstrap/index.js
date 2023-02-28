const mongoose = require('mongoose');
const config = require('../config');

exports.bootstrap = async () =>{
    try{
    await mongoose
    .connect(config.MONGODB_URL)
    .then(()=>console.log('database connected'))

    }catch(err){
        console.log(err)
    }
    return Promise.resolve(true);
}