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
  username: string;
  roles_id: number;
  phone_number: string;
  date_of_birth: string;
  id_card: string;
}
