import { Router } from "express";
import { authenticateUser } from "../middlewares/authenticateUserMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";


const testRouter = Router();

testRouter.post('/test', authenticateUser, validateSchemaMiddleware(),);

export default testRouter;