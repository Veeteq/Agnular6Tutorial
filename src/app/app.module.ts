import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { LunchCheckerComponent } from './lunch-checker/lunch-checker.component';
import { TestService } from './test.service';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { HelloWoroldProfileComponent } from './hello-worold-profile/hello-worold-profile.component';
import { HelloWoroldContactComponent } from './hello-worold-contact/hello-worold-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    LunchCheckerComponent,
    ErrorComponent,
    HelloWoroldProfileComponent,
    HelloWoroldContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ViewModule,
    AppRoutingModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
