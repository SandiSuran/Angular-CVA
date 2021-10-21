import { Address } from './address.model';

export interface Registration {
  firstName: string;
  lastName: string;
  primaryAddress: Address;
}

export interface RegistrationWithAddressString {
  firstName: string;
  lastName: string;
  primaryAddress: string;
}
