import Joi from "joi";
import { TTestData } from "../types/testType";

const testSchema = Joi.object<TTestData>({
  name: Joi.string().trim().required(),
  pdfUrl: Joi.string().uri().required()
})

export default testSchema;