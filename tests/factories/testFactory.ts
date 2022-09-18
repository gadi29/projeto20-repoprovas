import { faker } from '@faker-js/faker';

export default async function testFactory() {
  return {
    name: faker.lorem.word(),
    pdfUrl: faker.internet.url(),
    categoryId: Math.floor((Math.random() * 3) + 1), // Returns a random integer from 1 to 3
    teacherDisciplineId: Math.floor((Math.random() * 6) + 1), // Returns a random integer from 1 to 6
  };
}