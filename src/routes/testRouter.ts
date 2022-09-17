import { Router } from "express";
import { createTest, getTestsByDiscipline, getTestsByTeachers } from "../controllers/testControllers";
import { authenticateUser } from "../middlewares/authenticateUserMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import testSchema from "../schemas/testSchema";


const testRouter = Router();

testRouter.post('/test', authenticateUser, validateSchemaMiddleware(testSchema), createTest);
testRouter.get('/tests/disciplines', authenticateUser, getTestsByDiscipline);
testRouter.get('/tests/teachers', authenticateUser, getTestsByTeachers);

export default testRouter;