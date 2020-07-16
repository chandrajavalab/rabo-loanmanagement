import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { UsersService } from '../service/users.service';
import { Subscription }      from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userData$: Subscription;
  public invalidUserMessage:String;
  user:User = new User();

constructor(private userservice : UsersService,private router: Router) {}
  
ngOnInit(): void {
}
onSubmit(form :NgForm){
    
  var userDtl = this.userservice.validateUserDetails(
    form.value.userData.username,
    form.value.userData.password,
    form.value.userData.name,
    form.value.userData.id);
  
  this.userservice.setUserData(userDtl);
  
      this.router.navigate(['/login']);
    } 
}