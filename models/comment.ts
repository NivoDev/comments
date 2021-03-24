import {model, Schema, Types} from 'mongoose';

const CommentSchema = new Schema({
	
});

const Comment = model('Comment', CommentSchema);

export default Comment;