import {model, Schema, Types} from 'mongoose';

const CommentSchema = new Schema({
    entity: {
        type: String,
        index: true,
        required: true
    }
});

const Comment = model('Comment', CommentSchema);

export default Comment;