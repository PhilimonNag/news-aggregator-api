const express=require('express')
const router=express.Router()
router.route('/')
      .get((req,res)=>{res.send('news ok')})

module.exports=router