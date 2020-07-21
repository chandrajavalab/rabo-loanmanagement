import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UsersService } from '../service/users.service';
import { Subscription } from 'rxjs';
import { User } from '../model/User.model';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
  
})
export class UserLoginComponent implements OnInit {
public userData$: Subscription;
public invalidUserMessage:String;
user:User = new User();

constructor(public service : UsersService, private router: Router) {  
}

  ngOnInit(){
    this.resetFrom();
  }

  resetFrom(from?:NgForm){
    if(from = null)
    from.resetForm();
    this.service.formData = {
      firstName:'',
      lastName:'',
      userName: '',
      password: '',
      id: null,
      dateOfBirth:'',
      email: ''
    }

  }

  onSubmit(form :NgForm){
    
    var userDtl = this.service.validateUserDetails(
      form.value.userData.username,
      form.value.userData.password,
      form.value.userData.email,
      form.value.userData.id);
    
      this.service.setUserData(userDtl);
      this.router.navigateByUrl('/search');      
      this.invalidUserMessage="Invalid Username/Password";
  } 
}
