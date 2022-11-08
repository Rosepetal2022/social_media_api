const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            //Array of nested documents created witht he reaction schema 
        },
        //create a virtual called reactionCount thtat retrieves the length
        //of the of the thought's reactions array field on query
    }
)