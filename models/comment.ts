import {model, Schema, Types} from 'mongoose';

const CommentSchema = new Schema({
    entity: {
        type: String,
        index: true,
        required: true
    },
    comment: {
        text:{
            type: String,
            required: true
        },
        commentedBy:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            user: String,
        }, 
        uploadTime:{
            type: Date,
            default: Date()
    },
    isDeleted: false  
}});

const Comment = model('Comment', CommentSchema);

export default Comment;