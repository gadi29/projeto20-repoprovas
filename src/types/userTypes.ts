import { Users } from "@prisma/client";

export type TUserData = Omit<Users, 'id'>;

export type TUserDataCP = {
  email: string;
  password: string;
  confirmPassword: string;
}