import { Categories } from '@prisma/client';
import * as categoryRepository from '../repositories/categoryRepository';

export async function getCategoryById(categoryId: number) {
  const category: Categories = await categoryRepository.getCategoryById(categoryId);

  return category;
}