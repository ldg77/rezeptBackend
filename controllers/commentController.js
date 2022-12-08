import Comment from "../models/CommentModel.js";
import Recipe from "../models/RecipeModel.js";
const saveComment  =async (req,res) =>{
        try {
               const filter ={_id:(req.params.id)} 
               const recipe = await Recipe.findById(filter)
               const updatedRecipe = await Recipe.findByIdAndUpdate(filter,{comments:[...recipe.comments,req.body]},{new:true});
               console.log(updatedRecipe);
               res.status(201).json(updatedRecipe)
        } catch (error) {
                console.log(error);
        }
}

export {saveComment}