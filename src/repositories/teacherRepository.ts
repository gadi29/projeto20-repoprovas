import prisma from "../config/database";

export async function getTests() {
  const tests = await prisma.teachers.findMany({
    select: {
      name: true,
      TeachersDisciplines: {
        select: {
          discipline: {
            select: {
              name: true,
            }
          },
          Tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: {
                select: {
                  name: true,
                }
              }
            }
          }
        }
      }
    }
  })

  return tests;
}