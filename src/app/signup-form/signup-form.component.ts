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
    zipCode = new FormControl('');
    city = new FormControl('');

   createNewUser():void{
  console.log(this.username.value, this.useremail.value, this.userpassword.value, this.streetName.value, this.zipCode.value, this.city.value);
  }

  };

  
    
