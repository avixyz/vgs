import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrentmenuService {

  constructor() { }
  currentMenu='';

  private changedMenu=new Subject<string>();

  changedMenuStream=this.changedMenu.asObservable();

  changeMenu(newMenu:string){
    this.changedMenu.next(newMenu);
  }

}
