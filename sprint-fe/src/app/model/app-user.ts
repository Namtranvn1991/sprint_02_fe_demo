import {Role} from './role';

export interface AppUser {
  roles: Role;
  username: string;
}
