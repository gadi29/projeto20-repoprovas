import { Tests } from "@prisma/client";

export type TTestData = Omit<Tests, 'id' | 'categoryId' | 'teacherDisciplineId'>;