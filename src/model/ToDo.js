const {Schema, model} = require('mongoose')

const userSchema = new Schema ({
    title:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    description:{
        type: String,
        required: true,
        unique:true,
        minlength: 10,
        maxlength: 100,
    },
    status:{
        type:String,
        unique:true,
        minlength: 10,
        maxlength: 50,
    },
    Author:{
        type:String,
        unique:true,
        minlength: 3,
        maxlength: 50,
    },
    IsUser:{
        type: Boolean,
        default: true
    },
    IsAdmin:{
        type: Boolean,
        default: true
    }
},
    { timestamps: true }
);



const userModel = model("Todo", userSchema);

module.exports= userModel;