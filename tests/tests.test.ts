import app from '../src/app';
import supertest from 'supertest';
import prisma from "../src/config/database";

import testFactory from './factories/testFactory';
import userFactory from './factories/userFactory';

const agent = supertest(app);


describe("Test POST /test", () => {
  it("Should return 201 if successful", async () => { //não encontra usuário
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password };

    await agent.post('/signup').send(user);
    const { text: token } = await agent.post('/signin').send(userSignIn);

    const test = await testFactory();

    const result = await agent.post('/test').send(test).set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(201);
  });

  it("Should return 401 if don't authenticate", async () => {
    const test = await testFactory();

    const result = await agent.post('/test').send(test);

    expect(result.status).toBe(401);
  });

  it("Should return 404 if don't have the category in database", async () => { //404 por não encontrar usuário
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password };

    await agent.post('/signup').send(user);
    const { text: token } = await agent.post('/signin').send(userSignIn);

    const test = await testFactory();
    test.categoryId = + 100;

    const result = await agent.post('/test').send(test).set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(404);
  });

  it("Should return 404 if don't have the teacher-discipline register in database", async () => {
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password };

    await agent.post('/signup').send(user);
    const { text: token } = await agent.post('/signin').send(userSignIn);

    const test = await testFactory();
    test.teacherDisciplineId = + 100;

    const result = await agent.post('/test').send(test).set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(404);
  });
});


describe("Test GET /tests/disciplines", () => {
  it("Should return 200 and a array if successful", async () => {
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password };

    await agent.post('/signup').send(user);
    const { text: token } = await agent.post('/signin').send(userSignIn);

    const result = await agent.get('/tests/disciplines').set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it("Should return 401 if don't authenticate", async () => {
    const result = await agent.get('/tests/disciplines');

    expect(result.status).toBe(401);
  });
});


describe("Test GET /tests/teachers", () => {
  it("Should return 200 and a array if successful", async () => {
    const user = await userFactory();
    const userSignIn = { email: user.email, password: user.password };

    await agent.post('/signup').send(user);
    const { text: token } = await agent.post('/signin').send(userSignIn);

    const result = await agent.get('/tests/teachers').set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it("Should return 401 if don't authenticate", async () => {
    const result = await agent.get('/tests/teachers');

    expect(result.status).toBe(401);
  });
});


afterAll(async () => {
  await prisma.$disconnect();
});