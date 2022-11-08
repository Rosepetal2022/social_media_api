const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            //Use Mongoose's ObjectId data type 
            //Default value is set to a new ObjectId
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