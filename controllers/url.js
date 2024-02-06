
const makeShort = require('short-id')


const URL = require('../model/url')

async function GenerateNewURL(req,res){

    let website = req.body.url;

   let shortWebsite =  makeShort.generate()

   await URL.create({
    shortID:shortWebsite,
    redirectURL:website,
    history:[]

   })
   console.log(shortWebsite)
   res.json({shortWebsite})
    

}


async function GetbyURL(req,res){
    let shortID = req.params.id;



   let result =  await URL.findOneAndUpdate({
        shortID,
    },
    {
        $push:{
            history:{
                timestamp:Date.now()
            }
        }
    }

    )

    // let result = await URL.findOne({_id:id})
    res.json(result.redirectURL)

}

async function traffic(req,res){
    let shortID = req.params.shortID;

    let result =  await URL.findOne({shortID})

    res.json({totalclicks: result.history.length})
}




module.exports = {traffic,GetbyURL,GenerateNewURL}