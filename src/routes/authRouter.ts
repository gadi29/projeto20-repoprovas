import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import loginSchema from "../schemas/loginSchema";
import newUserSchema from "../schemas/newUserSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchemaMiddleware(newUserSchema), signUp);
authRouter.post('/signin', validateSchemaMiddleware(loginSchema), signIn);

export default authRouter;