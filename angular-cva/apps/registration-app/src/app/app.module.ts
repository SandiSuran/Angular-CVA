import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationComponent } from './containers/registration/registration.component';

@NgModule({
  declarations: [AppComponent, AddressComponent, RegistrationFormComponent, RegistrationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}