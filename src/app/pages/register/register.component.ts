import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor() { }

  ngOnInit() {
    this.user = new UserModel();
    this.user.email = 'sergiogdiseno3@gmail.com';
  }

  onSubmit( form:NgForm ){
    console.log('registro');
    console.log(this.user);
    console.log(form);
  }

}
