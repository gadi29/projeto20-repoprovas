import { NextFunction, Request, Response } from 'express';

const ERRORS = {
  bad_request: 400,
  unauthorized: 401,
  not_found: 404,
  conflict: 409
};

export default function errorHandlerMiddleware(error, req: Request, res: Response, next: NextFunction) {
  console.log(error)
  const type: string = error.type;
  let statusCode = ERRORS[type];
  if (!statusCode) return res.sendStatus(500);

  return res.status(statusCode).send(error.message);
}