const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image:{
        type:String,
        default:'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },

    like: [{
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'signup'
    }],


    comment: [{
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }],
    rating: [{
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'rating'
    }],
    createdby: {
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'signup'
    }

}, {
    timestamps: true
});

const listSchema = mongoose.model('Item', listingSchema);

module.exports = listSchema;