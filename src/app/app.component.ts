import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { Address } from './address-card/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 6 Basics';
  address: Address;
  user: User;
  inputText: string = "Initial value";

  constructor() {
    this.address = new Address();
    this.address.city = "Wroclaw";
    this.address.number = "73";
    this.address.street = "Wietrzna";
    this.address.zipCode = "53-024";

    this.user = new User("Witold Wojnarowicz");
    this.user.title = "Software developer";
    this.user.address = this.address;
    this.user.phones = [
      '+48 605 067 132',
      '+48 607 48 48 43'
    ];
  }
}
