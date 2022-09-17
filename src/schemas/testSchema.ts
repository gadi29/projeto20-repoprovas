import Joi from "joi";

const testSchema = Joi.object({
  name: Joi.string().trim().required(),
  pdfUrl: Joi.string().uri().required()
})

export default testSchema;