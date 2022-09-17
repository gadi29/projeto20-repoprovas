import { Categories, Tests } from "@prisma/client";
import { TTestData } from "../types/testType";
import * as categoryServices from './categoryServices';
import * as teacherServices from './teacherServices';
import * as termServices from './termServices';
import * as testRepository from '../repositories/testRepository';

async function existCategory(categoryId: number) {
  const category: Categories = await categoryServices.getCategoryById(categoryId);
  if (!category) throw { type: 'not_found', message: 'Category not found!' }

  return;
}

export async function createTest(testData: TTestData) {
  existCategory(testData.categoryId);
  const test: Tests = await testRepository.createTest(testData);

  return test;
}

export async function getTestsByDiscipline() {
  const tests = await termServices.getTests();

  return tests;
}

export async function getTestsByTeacher() {
  const tests = await teacherServices.getTests();

  return tests;
}