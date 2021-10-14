import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    RegistrationFormComponent,
    RegistrationComponent,
    UserInfoComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
