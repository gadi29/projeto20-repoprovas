import * as termRepository from '../repositories/termRepository';

export async function getTests() {
  const tests = await termRepository.getTests();

  return tests;
}