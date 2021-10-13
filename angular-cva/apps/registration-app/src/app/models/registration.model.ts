import { Address } from './address.model';

export interface Registration {
  firstName: string;
  lastName: string;
  primaryAddress: Address;
  secondaryAddress: Address;
}
