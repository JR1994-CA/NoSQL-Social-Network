const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');

const User = new Schema (
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    
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
        ] 
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }

);

User.virtual(friendCount).get(function () {
    return this.friends.reduce((total, friends) => total + User.friends.length + 1, 0);
});

const User = model('User', User);

module.exports = User;