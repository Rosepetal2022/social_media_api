const { User } = require('../models');

//Get all users
const userController = {
    getAllUser(req, res) {
        User.find({

        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

//create user
createUser({ body }, res) {
    User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
}

module.exports = userController;