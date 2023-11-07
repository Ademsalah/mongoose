const mongoose = require('mongoose')

const connectdb=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://ademhameed123:P2J1IBFTpEtBmpHe@cluster0.tesxucc.mongodb.net/?retryWrites=true&w=majority")
        console.log('u did ur connection')
    }catch(err){
        console.log(err)
    }
}
module.exports = connectdb
