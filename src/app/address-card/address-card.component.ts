import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: boolean = true;
  buttonTitle: string = "Expand";

  constructor() { 
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed){
      this.buttonTitle = "Expand";
    } else {
      this.buttonTitle = "Collapse";
    }
  }
}
