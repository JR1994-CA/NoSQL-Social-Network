const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Thought = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            
        }
    }

)