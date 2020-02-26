import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

 photo: string;
 value: string;

  constructor() { }

  ngOnInit() {
    this.value = '_';
    this.clicked(this.value);
  }

  clicked(value){
    if(this.value === '_'){
      this.photo =  "assets/" + value + ".png";
      this.value = value;
    }

  }
}
