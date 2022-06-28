import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username = new FormControl('');

  changeUsername() {
    this.username.setValue('kitten69');
  }

  
 
}
