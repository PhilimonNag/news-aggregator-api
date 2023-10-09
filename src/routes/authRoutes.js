const express=require('express')
const router=express.Router()
router.route('/auth')
      .get((req,res)=>{res.send('auth ok')})

module.exports=router