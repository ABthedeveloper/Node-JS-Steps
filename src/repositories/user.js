const userModel = require('../models/schema/user');

exports.create = async(payload)=>{

    return userModel.create(payload);
}