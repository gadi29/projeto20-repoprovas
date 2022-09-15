import Joi from "joi";
import { TUserData } from "../types/userTypes";

const loginSchema = Joi.object<TUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
})

export default loginSchema;