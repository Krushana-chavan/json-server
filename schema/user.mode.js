const {Schema,model}= require('mongoose');
const UserSchema = new Schema({
    name:String,
    age:Number,
    email:String,
    password:String,

});

const UserModel= model('custmer',UserSchema)
module.exports=UserModel;