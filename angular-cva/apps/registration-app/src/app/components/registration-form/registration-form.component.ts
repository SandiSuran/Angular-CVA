import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-cva-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
