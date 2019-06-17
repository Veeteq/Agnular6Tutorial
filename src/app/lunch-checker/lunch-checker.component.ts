import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lunch-checker',
  templateUrl: './lunch-checker.component.html',
  styleUrls: ['./lunch-checker.component.css']
})
export class LunchCheckerComponent implements OnInit {

  lunchMenu: string = "";
  message: string = "";

  constructor() { }

  ngOnInit() {
  }

  doCheck() {    
    let itemCnt = this.getArrayLength(this.lunchMenu);
    if(itemCnt == 0){
      this.message = "Please enter data first";
    } else if (itemCnt <= 3) {
      this.message = "Enjoy!";
    } else if (itemCnt > 3) {
      this.message = "Too much!";
    }
  }

  getArrayLength(str: string){
    //if string is empty return 0
    if(str.length ==0) {
      return 0;
    }

    //if there's a comma at the end of the string
    //remove it for further calculation
    let tmpStr = str;
    if(tmpStr.slice(-1) == ','){
      tmpStr = tmpStr.slice(0, -1);
    }

     //Make strig an array of strings(elements)
     let arrayOfStrings = tmpStr.split(',');

    //for each element in the array check if it is a valid "meal"
    //empty string "", one space " " or multiple space are
    //not considered as valid "meal"
    let itemCnt = 0;
    for(let i=0; i<arrayOfStrings.length; i++){
      if(arrayOfStrings[i].trim().length > 0){
        itemCnt++;
      }
    }
    return itemCnt;
  }
}
