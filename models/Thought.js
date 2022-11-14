const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
        reactions: [reactionSchema],   
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }, 
);

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//create the User model 
const Thought = model('Thought', ThoughtsSchema);

//export
module.exports = Thought; 