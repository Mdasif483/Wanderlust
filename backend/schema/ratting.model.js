const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "listing",
        required:true
    },
    ratedBy: {
        type: String,
        required: true,
        trim: true

    }
}, {
    timestamps: true
});

const rating = mongoose.model('rating', ratingSchema);

module.exports = rating;