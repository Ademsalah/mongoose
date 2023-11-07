const contactSchema= require('../model/contact')

exports.gettAllusers=async(req,res)=>{
    try{
        const contacts = await contactSchema.find()
        res.status(200).json({msg:'this is the users list',contacts})
    }catch(err){
        console.log(err)
    }
}

exports.adduser=async(req,res)=>{
    try{
        const adduser= new contactSchema(req.body)
        await adduser.save()
        res.status(200).json({msg:'you did this is the added user=>',adduser})
    }catch(err){
        console.log(err)
    }
}