import prisma from "../config/database";

export async function getTests() {
  const tests = await prisma.terms.findMany({
    select: {
      number: true,
      Disciplines: {
        select: {
          name: true,
          TeachersDisciplines: {
            select: {
              teacher: {
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
                    },
                  }
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