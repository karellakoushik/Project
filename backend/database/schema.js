const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    machinename: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    // _id: {
    //     type: Number,
    //     required: true
    //     unique:true
    // }

})

module.exports = mongoose.model('mycol',dataSchema)