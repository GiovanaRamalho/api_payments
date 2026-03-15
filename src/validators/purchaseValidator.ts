import { body } from "express-validator"

export const purchaseValidator = [

  body("product_id")
    .isInt()
    .withMessage("product_id must be an integer"),

  body("quantity")
    .isInt({ min: 1 })
    .withMessage("quantity must be greater than 0"),

  body("name")
    .notEmpty()
    .withMessage("name is required"),

  body("email")
    .isEmail()
    .withMessage("invalid email"),

  body("cardNumber")
    .isLength({ min: 16, max: 16 })
    .withMessage("card number must have 16 digits"),

  body("cvv")
    .isLength({ min: 3, max: 3 })
]