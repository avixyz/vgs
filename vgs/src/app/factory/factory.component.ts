import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
hover=false;
buttonText='SNEAK PEAK INTO OUR FACTORY';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(){
  
    this.hover=true;
    
  }

  onMouseLeave(){
    this.hover=false;
  }


}
