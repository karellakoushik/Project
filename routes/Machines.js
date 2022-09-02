const express=require('express')
const router=express.Router();
const registeredMachine=require('../Models/MachineSchema')
router.get('/',(req,res)=>{
    res.send("hello router")
})
router.post('/registerMachine',async(req,res)=>{
    const { id,model,manager,email,status}=req.body
    //checking if any field is empty
    if(!id ||!model ||!manager ||!email ||!status){
        return res.status(422).json({error:"Plz fill all the fields"})
    }
    
    try{
        //checking if id already exist or not
        const userExist=await registeredMachine.findOne({id:id})
    
    if(userExist){

            return res.status(422).json({error:"Machine with this id already exist"})
        }
    const machine=new registeredMachine({id:id,model:model,manager:manager,email:email,status:status})
    const isMacReg=machine.save()
    if(isMacReg){
        res.status(201).json({message:"Machine registered sucessfully"})
    }
    else
    {
        res.status(500).json({error:"Failed to register"})
    }
}
catch(err){
    console.log(err)
}
    
})

router.get('/get-machines', async(req,res) => {
    try
    {
        const data = await registeredMachine.find()
        var e=data.map((obj)=>
        {
            return  {
                model:obj.model,
                status:obj.status
                //id:obj._id
            } 
        })
        res.send(e)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})
module.exports=router