import { Router } from "express";
import { createTest } from "../controllers/testControllers";
import { authenticateUser } from "../middlewares/authenticateUserMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import testSchema from "../schemas/testSchema";


const testRouter = Router();

testRouter.post('/test', authenticateUser, validateSchemaMiddleware(testSchema), createTest);

export default testRouter;