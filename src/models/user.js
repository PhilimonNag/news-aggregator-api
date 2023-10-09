const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    fullName:{type:String,
    require:[true,'fullName is required']},
    email:{
        type:String,
        require:[true,'Email is required'],
        unique:[true,'User already Exist with same Email'],
        validator:()=>{

        }
    },
    password:{
        type:String,
        require:[true,'Password is required']
    },
    role:{
        type:String,
        enum:['normal','admin'],
        require:[true,'User role is required']
    }
},{
    timestamps:true
})