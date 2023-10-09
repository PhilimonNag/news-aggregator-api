require('dotenv').config()
const express=require('express');
const app=express()
const PORT=process.env.PORT||8001;
const router=require('./routes/router')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Hello From News Aggregator API')
})
app.use('/api/v1',router)


app.listen(PORT,(err)=>{
    if(err){
        console.log(`Server Failed at PORT:${PORT}`)
    }else{
        console.log(`Server is running at PORT:${PORT}`)
    }
})

