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
  Validators,
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
      addressLine: ['', Validators.required],
      country: ['', Validators.required],
      state: [''],
    });
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid
      ? null
      : {
          invalidAddressData: {
            valid: false,
            message: 'addressComponent fields are invalid',
          },
        };
  }

  ngOnInit(): void {
    console.log('init of address component');
  }

  blurHandler() {
    this.onTouched();
  }

  private onChange(newVal: string) {
    /* empty */
  }
  private onTouched(_?: any) {
    /* empty */
  }

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
    console.log('Addres form: on change');
    this.form.valueChanges.subscribe(fn);
  }
  /**
   *
   * @param fn
   */
  registerOnTouched(fn: any): void {
    console.log('Addres Form: on blur');
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('Address component disabled status changed');
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
