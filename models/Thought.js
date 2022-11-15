const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactioId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{
    toJSON: {
        getters: true
    }
});

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
        reactions: [ReactionSchema],   
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