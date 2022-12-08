import Recipe from "../models/RecipeModel.js";
import Comment from "../models/CommentModel.js";
const saveComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: comment._id } },
      { new: true }
    );
    res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
  }
};

export { saveComment };
