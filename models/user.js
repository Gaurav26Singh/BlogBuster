const mongoose = require('mongoose');
let dotenv = require('dotenv');
dotenv.config();

// console.log(process.env.URI);
mongoose.connect(process.env.URI);

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    posts : [{
        type:mongoose.Schema.Types.ObjectId, ref:"post"}],
    profilepic:{
        type:String,
        default:"pp.png"
    }    
});

module.exports = mongoose.model('user',userSchema);