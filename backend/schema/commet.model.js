const mongoose = require('mongoose')


// const replySchema = new mongoose.Schema({

//     text: {
//         type: String, m 
//         required: true,
//         trim: true

//     },
//     like_comment: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "signup"
//     }]
//     ,

//     commented_by: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Signup"
//     },

//     reply: [replySchema]



// }, { Timestamps: true })





const commentSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true,
        trim: true,
        lowercase:true

    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "listing",
        required:true
    },
    like_comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "signup"
    }]
    ,

    commented_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "signup"
    },



    reply: [replySchema]



}, { Timestamps: true })


const commentModal = mongoose.model('comment', commentSchema);

module.exports = commentModal;