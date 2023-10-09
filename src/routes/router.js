const express=require('express')
const router=express.Router()
const authRoutes=require('./authRoutes')
const newsRoutes=require('./newsRoutes')

router.use(authRoutes)
router.use(newsRoutes)

module.exports=router