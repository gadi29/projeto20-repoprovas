import app from '../src/app';
import supertest from 'supertest';
import prisma from "../src/config/database";

import userFactory from "./factories/userFactory";

const agent = supertest(app);


describe("Test POST /signup", () => {
  it("Should return 201 if successful", async () => {
    const user = await userFactory();

    const result = await agent.post('/signup').send(user);

    expect(result.status).toBe(201);
  });

  it("Should return 409 if already have a user with the same email", async () => {
    const user = await userFactory();

    await agent.post('/signup').send(user);
    const result = await agent.post('/signup').send(user);

    expect(result.status).toBe(409);
  });
});

describe("Test POST /signin", () => {
  it("Should return 200 and a token string if successful", async () => {
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password }

    await agent.post('/signup').send(user);

    const result = await agent.post('/signin').send(userSignIn);

    expect(result.status).toBe(200);
    expect(typeof result.text).toBe("string");
  });

  it("Should return 401 if email is not registered", async () => {
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password }

    const result = await agent.post('/signin').send(userSignIn);

    expect(result.status).toBe(401);
  });

  it("Should return 401 if wrong password passed", async () => {
    const user = await userFactory();

    await agent.post('/signup').send(user);

    const wrongPassword = `wrong-${user.password}-wrong`;
    const userSignIn = { email: user.email, password: wrongPassword }

    const result = await agent.post('/signin').send(userSignIn);

    expect(result.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});