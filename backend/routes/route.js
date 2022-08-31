const express = require('express')
const router = express.Router()
//const cors = require('cors')
const mycol = require('../database/schema.js')

router.get('/machines', async(req,res) => {
    try
    {
        const data = await mycol.find()
        var e=data.map((obj)=>
        {
            return  {
                machinename:obj.machinename,
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
// router.get('/:id', async(req,res) => {
//     try{
//            const data = await mycol.findById(req.params.id)
//            res.json(data)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

// router.post('/',async (req,res) => {
//     const data = new mycol({
//         machinename:req.body.machinename,
//         status: req.body.status
//     })
//     try{
//         const result = await data.save()
//         res.send(result) 
//     }catch(err){
//         res.send('Error')
//     }
// })


module.exports=router