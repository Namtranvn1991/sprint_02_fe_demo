import {AppUser} from './app-user';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  idCard: string;
  gender: number;
  appUser: AppUser;
  image: string;
}
