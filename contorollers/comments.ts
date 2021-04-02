import Comment from '../models/comment';
import service from '../services/comment'

export const getComments = async(req,res) => {
    const entity = req.query.entity;
    if(!entity){
        return res.status(400).json({message: "Please provide an entity ID"})
    }
    const comments = await Comment.find({entity});
    res.json(comments);
}

export const createComment = async(req,res,comment) => {
    const entity = req.query.entity;
    if(!entity){
        return res.status(400).json({message: "Please provide an entity ID"})
    }
    const newComment = await Comment.create({comment});
    res.json(newComment);
          
}

export const updateComment = async(req,res,change)=>{
    const commentToUpdate = req.params.commentId;
    const updatedComment = await Comment.updateOne({commentToUpdate},{change});
    res.json(updatedComment);
}

export const deleteComment = async(req,res)=>{
    const commentId = req.params.commentId;
    const deletedComment = await Comment.remove({commentId});
    res.json(deletedComment);
}

