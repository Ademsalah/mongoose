const express = require('express')
const contactRouter = express.Router()
const{gettAllusers,adduser}=require('../controllers/controllers')
const contactSchema = require('../model/contact')


contactRouter.get('/alluser',gettAllusers)



contactRouter.post('/add',adduser)





contactRouter.put('/update/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const updateduser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})

        res.status(200).json({msg:"updateduser",updateduser})
    }catch(err){
        console.log(err)
    }
})


contactRouter.get('/unique/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const uniqueuser = await contactSchema.findById(id)
        res.status(200).json({msg:"uniqueuser",uniqueuser})
    }catch(err){
        console.log(err)
    }
})
module.exports = contactRouter

