import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-cva-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
