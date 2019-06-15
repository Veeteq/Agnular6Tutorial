import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: String; 
  someNumber: number = 10;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = formatDate(currentDate, 'yyyy-MM-dd hh:mm', 'en-US');
    }, 1000);
  }

  ngOnInit() {
  }

  addTwoNumbers(a: number, b: number){
    return a + b;
  }
}
