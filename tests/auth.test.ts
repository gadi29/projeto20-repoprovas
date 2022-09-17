import app from '../src/app';
import supertest from 'supertest';
import prisma from "../src/config/database";

const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE receitas;`;
});

describe("Test POST /signup", () => {
  it.todo("Should return 201 if successful");

  it.todo("Should return 422 if any information is passed incorrectly")

  it.todo("Should return 409 if already have a user with the same email");
});

describe("Test POST /signin", () => {
  it.todo("Should return 200 and a token string if successful");

  it.todo("Should return 401 if no token no token is passed");

  it.todo("Should return 401 if wrong token passed");

  it.todo("Should return 401 if wrong password passed");
});

afterAll(async () => {
  await prisma.$disconnect();
});