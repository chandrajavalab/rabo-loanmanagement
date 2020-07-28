import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { User } from '../model/User.model';
import { LoanManagementServiceService } from '../service/loan-management-service.service';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
  
})
export class UserLoginComponent implements OnInit {

  user = new User();
  message = '';

  constructor(private userservice : LoanManagementServiceService, private router: Router) {  
  }

  ngOnInit(){ 

  }

  loginUser(){
    this.userservice.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Recived");
        this.router.navigate(['/search'])
      },
      error => {
        console.log("Exception Occured");
        this.message = "Bad credentials, Please enter valid user name and password";
      }
    )
  }

}
