

const mongoose = require('mongoose')

const shortenURL = new mongoose.Schema({

    shortID:{
        type:String,
        require:true,
        unique:true
    },
    redirectURL:{
        type:String,
        require:true
    },
    history:[{
        timestamp:{
            type:Number
        }
    }]
   

    
},
{ timestamp:true }
)


const URL = mongoose.model('url',shortenURL)


module.exports = URL