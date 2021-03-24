import Comment from '../models/comment';

export const getComments = (req,res) => {
   Comment.find(req.query.entity)
}

export const createComment = (req,res) => {

}

export const updateComment = (req,res)=>{

}

export const deleteComment = (req,res)=>{
    
}

