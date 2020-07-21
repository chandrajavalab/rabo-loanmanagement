import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../model/User.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  formData:User;


  userDetails = 
[{
    Username :'Chandra',
	  Password :'chandra123*'
  },
  {
    Username :'Mohan',
	  Password :'mohan123*'
  },
  {
    Username :'Mohan',
    Password :'mohan123*',
    email : 'mohan@gmail.com',
    id : 12233,
	  isAdminUser :false,
    isLoggedIn :false
  }
];

currentUser:User;

private userData$:BehaviorSubject<User>;

  constructor() {
    this.userData$ = new BehaviorSubject(null);
   }

   getUserData(){
     return this.userData$.asObservable();
   }

   setUserData(userDetails:User){
     
     this.userData$.next(userDetails);
   }



  public validateUserDetails( userName:String, password:String, email:String, id:number){
    var newUser = new User();
    for(var usr of this.userDetails){
      
      if(usr.Username===userName && usr.Password === password){
        usr.isLoggedIn = true;
        if(usr.Username === 'admin'){
          usr.isAdminUser = true;
        }
        
        
        newUser.userName = usr.Username;
        newUser.password = usr.Password;
        newUser.email = usr.email;
        newUser.id = usr.id;
        break;
      }else{
        
      }
    }
    return newUser;
  }
}
