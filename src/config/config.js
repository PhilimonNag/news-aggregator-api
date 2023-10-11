const mongoose=require('mongoose')
let db;
mongoose.connect(process.env.DB_URL)
.then((value)=>{
    console.log('Db connected Successfully!')
    db=value
})
.catch((err)=>{
    console.log('Db connection Faield!')
    console.log(err)
})
module.exports=db