import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Registration } from '../../models';

@Component({
  selector: 'angular-cva-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
})
export class AddressComponent
  implements OnInit, ControlValueAccessor, Validator
{
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      addressLine: [''],
      country: [''],
      state: [''],
    });
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid
      ? null
      : { invalidAddressData: { valid: false, errors: this.form.errors } };
  }

  ngOnInit(): void {
    console.log('init of address component');
  }
  onChange(newVal: string) {}
  onTouched(_?: any) {}
  /**
   *
   * @param obj
   */
  writeValue(obj: Registration): void {
    this.form.patchValue(obj);
  }
  /**
   *
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.form.valueChanges.subscribe(fn);
  }
  /**
   *
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
