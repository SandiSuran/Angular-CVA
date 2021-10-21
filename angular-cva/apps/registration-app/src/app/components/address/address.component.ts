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
  writeValue(obj: string): void {
    //From the outside world I am receiving a string with comma separated values..
    //address;cuntry;state
    if (!obj) return;

    const myFormStateObject = obj
      .split(';')
      .reduce((acc, current, currentIndex) => {
        if (currentIndex == 0) {
          acc['addressLine'] = current;
          return acc;
        } else if (currentIndex == 1) {
          acc['country'] = current;
          return acc;
        } else if (currentIndex == 2) {
          acc['state'] = current;
          return acc;
        } else return acc;
      }, {} as Record<string, any>);
    this.form.patchValue(myFormStateObject, {
      emitEvent: false,
      onlySelf: true,
    });
  }
  /**
   *
   * @param fn
   */
  registerOnChange(fn: any): void {
    console.log('register on change');
    //Probably should also add a takeWhile operator or directly unsubscribe from this subscription on ngOnDestroy..
    this.form.valueChanges.subscribe((changes) => {
      //If I really need to do some manipulation on data changes, then I can do it here
      //instead of having an object of address properties, I want to have a result of a simple string comma separated values
      const myDataManipulation = Object.values(this.form.value).join(';');
      console.log('changes manipulation');
      fn(myDataManipulation);
    });
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
