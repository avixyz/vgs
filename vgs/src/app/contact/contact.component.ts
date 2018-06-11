import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CurrentmenuService } from '../currentmenu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  buttonHover=false;
  minLength=10;
  name = new FormControl('', [Validators.required]);
  company = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  message=new FormControl('',[Validators.required,Validators.minLength(this.minLength)]);
  phone=new FormControl('',Validators.required);
  constructor(private menuService:CurrentmenuService) { }

  ngOnInit() {
    this.menuService.changeMenu('contact');
  }
 
getnameErrorMessage(){
  return this.name.hasError('required') ? 'Name is required':'';
}
  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getphoneErrorMessage(){
    return this.phone.hasError('required') ? 'Phone Number is required':'';
  }
  getmsgErrorMessage(){
    return this.message.hasError('required')? 'Message is required':
    this.message.hasError('minlength')?'Minimum 10 characters':'';
  }

  onMouseOver(){
    this.buttonHover=true;
  }

  onMouseLeave(){
    this.buttonHover=false;
  }

  onSubmit(contactform){
    console.log(contactform);
    console.log(this.name.value);
  }
}
