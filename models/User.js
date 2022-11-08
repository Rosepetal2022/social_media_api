const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        uniqure: true,
        //must match a valid email address(look into Mongoose's matching validation)
    },
    thoughts: {
        //an array of _id values referenceing the user model(self-reference)
    },
    //create a virtual called friendCount that retireves the length of 
    //the user's friends array field on query
})