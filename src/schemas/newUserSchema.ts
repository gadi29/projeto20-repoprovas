import Joi from "joi";
import { TUserDataCP } from "../types/userTypes";

const newUserSchema = Joi.object<TUserDataCP>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required()
})

export default newUserSchema;