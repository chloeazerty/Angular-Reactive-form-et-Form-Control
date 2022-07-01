import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user.models';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
    username = new FormControl('');
    useremail = new FormControl('');
    userpassword = new FormControl('');
    streetName =  new FormControl('');
    zipCode = new FormControl(0);
    city = new FormControl('');

  
  user = new User("" , "", "", "", 0, "");
  element=false;
  createNewUser():void{
 this.user.username = this.username.value, 
 this.user.email = this.useremail.value, 
 this.user.password = this.userpassword.value, 
 this.user.streetName = this.streetName.value, 
 this.user.zipCode = this.zipCode.value, 
 this.user.city = this.city.value;

 this.element = true;
  }

  };

  
    
