import {UserRole} from "../model/enum/user-role";

export interface UserDTO {
  login: string;
  password: string;
  name?: string;
  role?: UserRole;
}
