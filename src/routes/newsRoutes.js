const express=require('express')
const router=express.Router()
router.route('/news')
      .get((req,res)=>{res.send('news ok')})

module.exports=router