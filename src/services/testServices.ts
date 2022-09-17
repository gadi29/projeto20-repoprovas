import { Tests } from "@prisma/client";
import { TTestData } from "../types/testType";
import * as termServices from './termServices';
import * as testRepository from '../repositories/testRepository';

export async function createTest(testData: TTestData) {
  const test: Tests = await testRepository.createTest(testData);

  return test;
}

export async function getTestsByDiscipline() {
  const tests = await termServices.getTests();

  return tests;
}