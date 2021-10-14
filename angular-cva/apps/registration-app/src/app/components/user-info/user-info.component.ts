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

@Component({
  selector: 'angular-cva-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserInfoComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserInfoComponent),
      multi: true,
    },
  ],
})
export class UserInfoComponent
  implements OnInit, ControlValueAccessor, Validator
{
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [],
    });
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.formGroup.valid
      ? null
      : {
          basicUserInfo: {
            valid: false,
            message: 'test',
          },
        };
  }

  private onChange(newVal: string) {
    /* empty */
  }
  private onTouched(_?: any) {
    /* empty */
  }

  writeValue(obj: any): void {
    this.formGroup.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.formGroup.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}
}
