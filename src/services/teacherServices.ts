import * as teacherRepository from '../repositories/teacherRepository';

export async function getTests() {
  const tests = await teacherRepository.getTests();

  return tests;
}