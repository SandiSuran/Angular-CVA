import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../../models';
import { RegistrationFormData } from '../../types';

@Component({
  selector: 'angular-cva-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent implements OnInit {
  @Input() registrationFormData: RegistrationFormData = undefined;
  @Output() submitted = new EventEmitter<Registration>();

  formGroup: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.formGroup = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   addressLine1: ['', Validators.required],
    //   country: ['', Validators.required],
    //   state: ['', Validators.required],
    //   addressLine2: ['', Validators.required],
    //   country2: ['', Validators.required],
    //   state2: ['', Validators.required],
    // });

    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      primaryAddress: [null, Validators.required],
      secondaryAddress: [],
    });

    if (this.registrationFormData) {
      this.formGroup.patchValue(this.registrationFormData);
    }
  }

  submitHandler() {
    //const payload = this.formGroup.value as RegistrationData;
    const payload = this.formGroup.value as Registration;
    console.log(payload);
  }
}

// interface RegistrationData {
//   firstName: string;
//   lastName: string;
//   addressLine1: string;
//   country: string;
//   state: string;
//   addressLine2: string;
//   country2: string;
//   state2: string;
// }
