import { Tests } from '@prisma/client';
import { Request, Response } from 'express';
import { TTestData } from '../types/testType';

export async function createTest(req: Request, res: Response) {
  const newTest: TTestData = req.body;

  const test: Tests = '';
  res.status(200).send(`Test: ${test.name}, registered successfully!`);
}