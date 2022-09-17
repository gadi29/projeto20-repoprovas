import { Router } from "express";
import { authenticateUser } from "../middlewares/authenticateUserMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import testSchema from "../schemas/testSchema";


const testRouter = Router();

testRouter.post('/test', authenticateUser, validateSchemaMiddleware(testSchema),);

export default testRouter;