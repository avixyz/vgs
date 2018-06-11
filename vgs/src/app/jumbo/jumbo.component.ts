import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.css']
})
export class JumboComponent implements OnInit {
jText=['Conveyors', 'Filtration Units', 'Oil Chillers'];
jumboText="";
i=0;
c=0;
hover=false;
  constructor() { }

  ngOnInit() {
    
    this.changeText();
  }

changeText(){

  if(this.c<this.jText[this.i].length){
    
    setTimeout(()=>{
      this.nextText();
    },100)
  }
  
}

nextText(){
  this.jumboText=this.jText[this.i].substr(0,this.c+1);
  this.c++;
  
  if(this.c==this.jText[this.i].length){
    setTimeout(()=>{
      if(this.i==this.jText.length-1){
        
        this.i=0;
      }else{this.i++;}
      this.c=0;
      
    this.changeText();      
    }
   
    ,4000) 
  }
  this.changeText();
 
}

onMouseOver(){
  
  this.hover=true;
  
}

onMouseLeave(){
  this.hover=false;
}



}

