import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration, RegistrationWithAddressString } from '../../models';
import { RegistrationFormData } from '../../types';

@Component({
  selector: 'angular-cva-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent implements OnInit, OnChanges {
  @Input() registrationFormData:
    | RegistrationFormData
    | RegistrationWithAddressString
    | undefined = undefined;
  @Input() disabled = false;
  @Output() submitted = new EventEmitter<Registration>();

  formGroup: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled'] && !changes['disabled'].firstChange) {
      const disabled = changes['disabled'].currentValue;
      disabled ? this.formGroup.disable() : this.formGroup.enable();
    }
    if (changes['registrationFormData']) {
      this.formGroup.patchValue(changes['registrationFormData'].currentValue);
    }
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      basicUserInfo: [],
      primaryAddress: ['', Validators.required],
    });

    if (this.registrationFormData) {
      this.formGroup.patchValue(this.registrationFormData);
    }
  }

  submitHandler() {
    //const payload = this.formGroup.value as RegistrationData;
    //const payload = this.formGroup.value as Registration;
    const payload = this.formGroup.value as RegistrationWithAddressString;
    console.log(payload);
  }
}
