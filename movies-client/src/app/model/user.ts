import {UserRole} from "./enum/user-role";

export class User {
  id: string;
  login: string;
  password: string;
  role: UserRole;
  createdAt: Date;
}
