import { Tests } from '@prisma/client';
import { Request, Response } from 'express';
import { TTestData } from '../types/testType';
import * as testService from '../services/testServices';

export async function createTest(req: Request, res: Response) {
  const newTest: TTestData = req.body;

  const test: Tests = await testService.createTest(newTest);
  res.status(201).send(`Test: '${test.name}' registered successfully!`);
}

export async function getTests(req: Request, res: Response) {
  const tests = await testService.getTests();
  res.status(200).send(tests);
}