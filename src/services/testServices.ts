import { Tests } from "@prisma/client";
import { TTestData } from "../types/testType";
import * as testRepository from '../repositories/testRepository';

export async function createTest(testData: TTestData) {
  const test: Tests = await testRepository.createTest(testData);

  return test;
}

export async function getTests() {
  const tests: Tests[] = ;
}