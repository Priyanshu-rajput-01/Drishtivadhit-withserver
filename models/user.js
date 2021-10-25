const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true,
        unique:true
    },
    lastname : {
        type:String,
        required:true
    },

    mothername : {
        type:String,
        required:true
    },

    fathername : {
        type:String,
        required:true
    },

    address : {
        type:String, 
        required:true
    },

    gender : {
        type:String,
        required:true
    },

    dob : {
        type:Date,
        required:true
    },

    doa : {
        type:String,
        required:true
    },

    pincode : {
        type:Number,
        required:true
    },

    emailid : {
        type:String,
        required:true,
        unique:true
    },

    mob: {
        type:Number,
        required:true,
        unique:true
    },

    pass: {
        type:String,
        required:true
    },

    cpass: {
        type:String,
        required:true
    },

    sugg: {
        type:String,
        required:true
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;