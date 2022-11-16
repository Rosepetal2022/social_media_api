const { Schema, model, Types } = require('mongoose');
const { compareAsc, format } = require('date-fns');

const ReactionSchema = new Schema({
    reactionId: {
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
        get: (createdAtVal) => format(new Date(createdAtVal), 'MM-dd-yyyy')
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
            get: (createdAtVal) => format(new Date(createdAtVal), 'MM-dd-yyyy')
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