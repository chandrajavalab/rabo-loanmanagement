import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { AddLoanComponent } from './addloan/addloan.component';
import { UpdateLoanComponent } from './updateloan/updateloan.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : '', redirectTo:'/userlogin',pathMatch:'full'},
  { path: 'registeruser', component: RegisterComponent  },
  {path : 'userlogin', component : UserLoginComponent},
  {path : 'search', component : SearchComponent},
  {path : 'logout', component : LogoutComponent},
  {path : 'addloan', component : AddLoanComponent},
  {path : 'updateloan', component : UpdateLoanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
