import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../model/User.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  userData:User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    
    this.router.navigate(['']);
    
  }

}
