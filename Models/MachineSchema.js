const mongoose=require('mongoose')
const machineSchema=mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },
    model: {
        type:String,
        required:true
    },
    manager: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
        
    },
    status: {
        type:String,
        required:true
    }

})
const registeredMachine= new mongoose.model("registeredMachine",machineSchema);

module.exports=registeredMachine