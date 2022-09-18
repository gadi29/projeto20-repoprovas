import { faker } from '@faker-js/faker';

export default async function userFactory() {
  const passwordString = faker.random.alphaNumeric(10);

  return {
    email: faker.internet.email(),
    password: passwordString,
    confirmPassword: passwordString
  };
}