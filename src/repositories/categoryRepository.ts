import { Categories } from "@prisma/client";
import prisma from "../config/database";

export async function getCategoryById(categoryId: number) {
  const category: Categories = await prisma.categories.findUnique({ where: { id: categoryId } });

  return category;
}