import { Request, Response } from 'express';
import { TUserDataCP, TUserData } from '../types/userTypes';
import * as authService from '../services/authServices';

export async function signUp(req: Request, res: Response) {
  const newUser: TUserDataCP = req.body;

  await authService.signUp({ email: newUser.email, password: newUser.password });
  res.status(201).send('User registered successfully');
}

export async function signIn(req: Request, res: Response) {
  const userData: TUserData = req.body;

  const token: string = await authService.signIn(userData);
  res.status(200).send(token);
}