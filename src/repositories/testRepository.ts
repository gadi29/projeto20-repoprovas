import { Tests } from "@prisma/client";
import { TTestData } from "../types/testType";
import prisma from "../config/database";

export async function createTest(testData: TTestData) {
  const test: Tests = await prisma.tests.create({ data: testData });

  return test;
}