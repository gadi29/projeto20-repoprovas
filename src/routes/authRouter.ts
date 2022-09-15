import { Router } from "express";
//import { signIn, signUp } from "../controllers/userControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import newUserSchema from "../schemas/newUserSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchemaMiddleware(newUserSchema), signUp);
authRouter.post('/signin', signIn);

export default authRouter;