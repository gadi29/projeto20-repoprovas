import { TeachersDisciplines } from '@prisma/client';
import * as teacherDisciplineRepository from '../repositories/teacherDisciplineRepository';

export async function getTeacherDisciplineById(teacherDisciplineId: number) {
  const teacherDiscipline: TeachersDisciplines = await teacherDisciplineRepository.getTeacherDisciplineById(teacherDisciplineId);

  return teacherDiscipline;
}