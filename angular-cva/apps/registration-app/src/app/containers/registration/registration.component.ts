import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Registration, RegistrationWithAddressString } from '../../models';

@Component({
  selector: 'angular-cva-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  registrationFormDataTest: RegistrationWithAddressString | undefined =
    undefined;
  constructor() {}

  disabled = false;

  registrationFormData: Registration = {
    firstName: 'Milivoj',
    lastName: 'Savic',
    primaryAddress: {
      addressLine: 'Butori 7, Tinjan',
      country: 'Canada',
      state: 'test',
    },
  };

  ngOnInit(): void {}
  disableClickHandler() {
    this.disabled = !this.disabled;
  }

  fetchFromServerClickHandler() {
    this.registrationFormDataTest = {
      firstName: 'Milivoj',
      lastName: 'Savic',
      primaryAddress: 'Butori 7, Tinjan; Canada; test',
    };
  }
}
