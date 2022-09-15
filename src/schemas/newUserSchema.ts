import Joi, { ref } from "joi";

const newUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required()
})

export default newUserSchema;