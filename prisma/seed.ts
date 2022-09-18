import { faker } from '@faker-js/faker';
import prisma from '../src/config/database';

async function main() {

  for (let i = 1; i <= 6; i++) {
    await prisma.terms.upsert({
      where: { number: i },
      update: {},
      create: { number: i }
    });
  };

  await prisma.categories.createMany({
    data: [
      { name: "Projeto" },
      { name: "Prática" },
      { name: "Recuperação" },
    ],
    skipDuplicates: true,
  });

  await prisma.teachers.createMany({
    data: [
      { name: "Diego Pinho" },
      { name: "Bruna Hamori" },
    ],
    skipDuplicates: true,
  });

  await prisma.disciplines.createMany({
    data: [
      { name: "HTML e CSS", termId: 1 },
      { name: "JavaScript", termId: 2 },
      { name: "React", termId: 3 },
      { name: "Humildade", termId: 1 },
      { name: "Planejamento", termId: 2 },
      { name: "Autoconfiança", termId: 3 },
    ],
    skipDuplicates: true,
  });

  await prisma.teachersDisciplines.createMany({
    data: [
      { teacherId: 1, disciplineId: 1 },
      { teacherId: 1, disciplineId: 2 },
      { teacherId: 1, disciplineId: 3 },
      { teacherId: 2, disciplineId: 4 },
      { teacherId: 2, disciplineId: 5 },
      { teacherId: 2, disciplineId: 6 },
    ],
    skipDuplicates: true,
  });

  const test = {
    name: faker.lorem.word(),
    pdfUrl: faker.internet.url(),
    categoryId: Math.floor((Math.random() * 3) + 1), // Returns a random integer from 1 to 3
    teacherDisciplineId: Math.floor((Math.random() * 6) + 1), // Returns a random integer from 1 to 6
  };

  await prisma.tests.create({ data: test });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });