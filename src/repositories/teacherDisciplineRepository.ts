import { TeachersDisciplines } from "@prisma/client";
import prisma from "../config/database";

export async function getTeacherDisciplineById(teacherDisciplineId: number) {
  const teacherDiscipline: TeachersDisciplines = await prisma.teachersDisciplines.findUnique({ where: { id: teacherDisciplineId } });

  return teacherDiscipline;
}