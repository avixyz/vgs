import { Component, OnInit, Injectable } from '@angular/core';
import { CurrentmenuService } from '../currentmenu.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()


export class HeaderComponent implements OnInit {
  abouthover=false;
  productshover=false;
  contacthover=false;
  subscribe:Subscription;
  constructor(private cService:CurrentmenuService) { }

  ngOnInit() {

  this.subscribe=this.cService.changedMenuStream.subscribe((s:string)=>{
    this.setHover(s);
  });

  }


 setHover(menu:string){
    if(menu=='about'){
      console.log("came here");
      this.abouthover=true;
      
    }
    if(menu=='products'){
      this.productshover=true;
    }
    if(menu=='contact'){
      this.contacthover=true;
    }

  }


onMouseOver($event){
  if($event.target.id=='about'){
    this.abouthover=true;
  }

  if($event.target.id=='products'){
    this.productshover=true;
  }

  if($event.target.id=='contact'){
    this.contacthover=true;
  }

}


onMouseLeave($event){
  if($event.target.id=='about'){
    this.abouthover=false;
  }

  if($event.target.id=='products'){
    this.productshover=false;
  }

  if($event.target.id=='contact'){
    this.contacthover=false;
  }

}


}
