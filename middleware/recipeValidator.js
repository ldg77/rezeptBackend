import { body } from "express-validator";

export const recipeValidator = [
  body("title")
    .notEmpty()
    .withMessage("please give a Title")
    .isLength({ min: 1, max: 100 })
    .trim()
    .escape(),
  body("author")
    .notEmpty()
    .withMessage("please give a author")
    .trim()
    .isLength({ min: 1, max: 20 })
    .escape(),
  body("preparation")
    .notEmpty()
    .withMessage("please write the preparation steps")
    .trim()
    .isLength({ min: 1 })
    .escape(),
];
