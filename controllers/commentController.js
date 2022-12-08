import Recipe from "../models/RecipeModel.js";
import Comment from "../models/CommentModel.js";
const saveComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    const recipe = await Recipe.findById(req.params.id);
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipe._id,
      { comments: [...recipe.comments, comment._id] },
      { new: true }
    );
    console.log(updatedRecipe);
    res.status(201).json(updatedRecipe);
  } catch (error) {
    console.log(error);
  }
};

export { saveComment };
