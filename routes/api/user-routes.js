const router = require('express').Router();

const {
    getAllUser,
    createUser,
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//Get a single user by Id

//Post(create) a new user

//Put to update a user by its _id

//Delete to remove user by its _id

//BONUS remove a user's associated thoughts when deleted

// /api/users/:userId/friends/:friendId

//Post to add a new friend to a user's friend list

//Delete to remove a friend from a users's friend list 

module.exports = router;