import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Registration } from '../../models';

@Component({
  selector: 'angular-cva-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  constructor() {}

  registrationFormData: Registration = {
    firstName: 'Milivoj',
    lastName: 'Savic',
    primaryAddress: {
      addressLine: 'Butori 7, Tinjan',
      country: 'Canada',
      state: 'test',
    },
    secondaryAddress: {
      addressLine: 'Test 7, Tinjan',
      country: 'USA',
      state: 'NY',
    },
  };

  ngOnInit(): void {}
}
