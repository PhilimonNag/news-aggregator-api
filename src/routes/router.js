const express=require('express')
const router=express.Router()
const authRoutes=require('./authRoutes')
const newsRoutes=require('./newsRoutes')
const verifyAuth = require('../middlewares/authMiddleware')

router.use('/auth',authRoutes)
router.use('/news',verifyAuth,newsRoutes)

module.exports=router