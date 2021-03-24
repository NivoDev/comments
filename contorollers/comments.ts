import Comment from '../models/comment';

export const getComments = async(req,res) => {
    const entity = req.query.entity;
    if(!entity){
        return res.status(400).json({message: "Please provide an entity ID"})
    }
    const comments = await Comment.find({entity});
    res.json(comments);
}

export const createComment = (req,res) => {

}

export const updateComment = (req,res)=>{

}

export const deleteComment = (req,res)=>{
    
}

