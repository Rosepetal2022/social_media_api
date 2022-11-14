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
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    } 
);
 //create a virtual called friendCount that retireves the length of 
//the user's friends array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//create the User model 
const User = model('User', UserSchema);

//export
module.exports = User; 