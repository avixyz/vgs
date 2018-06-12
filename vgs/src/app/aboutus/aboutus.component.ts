import { Component, OnInit } from '@angular/core';
import { CurrentmenuService } from '../currentmenu.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private menuService:CurrentmenuService) { }

  ngOnInit() {

    this.menuService.changeMenu('about');
  }

}
