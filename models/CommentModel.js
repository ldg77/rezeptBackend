import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
        name:{type:String},
        text:{type:String},
        
},{timestamps:true} )

const Comment = mongoose.model('Comment',commentModel);
export default Comment;