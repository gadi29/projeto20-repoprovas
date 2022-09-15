import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Users } from '@prisma/client';
import { TUserData } from '../types/userTypes';
import * as authRepository from '../repositories/authRepository'

export async function getUserByEmail(email: string) {
  const user: Users = await authRepository.findByEmail(email);

  return user;
}

export async function getUserById(userId: number) {
  const user: Users = await authRepository.findById(userId);

  return user;
}

export async function signUp(newUser: TUserData) {
  const existUser = await getUserByEmail(newUser.email);
  if (existUser) throw { type: 'conflict', message: 'This email already exists' }

  const password = passwordHash(newUser.password);

  const userData: TUserData = { email: newUser.email, password }

  await authRepository.createUser(userData);

  return;
}

function passwordHash(password: string) {
  const saltRounds: number = 10;
  const passwordHash: string = bcrypt.hashSync(password, saltRounds);

  return passwordHash;
}

export async function signIn(userData: TUserData) {
  const user = await getUserByEmail(userData.email);
  if (!user) throw { type: 'unauthorized', message: 'Login error' }

  const confirmPassword: boolean = bcrypt.compareSync(userData.password, user.password);
  if (!confirmPassword) throw { type: 'unauthorized', message: 'Login error' }

  const token = generateToken(user.id);

  return token;
}

function generateToken(id: number) {
  const token: string = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '15 days' });

  return token;
}