import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { Subscription }      from 'rxjs';
import { LoanManagementServiceService } from '../service/loan-management-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = new User();
  message = '';

constructor( private service: LoanManagementServiceService, private router: Router) {}
  
  ngOnInit(){
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Recived");
        this.router.navigate(['/userlogin'])
      },
      error => {
        console.log("Exception Occured");
        this.message = "In-valid user or user already exit";
      }
    )
  }

 
}