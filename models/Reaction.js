const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                index: true,
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use a getter method to format the timestamp on the query
        },
        //This will not be a model, but rather will be used as the reaction
        //field's subdocument schema in the Thought model.

    }
)

module.exports = Reaction;