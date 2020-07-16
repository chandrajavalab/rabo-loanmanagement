import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './service/users.service';
import {GlobalDataService} from './service/global-data.service';
import { LogoutComponent } from './logout/logout.component';
import { AddLoanComponent } from './addloan/addloan.component';
import { UpdateLoanComponent } from './updateloan/updateloan.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SearchComponent,
    HeaderComponent,
    LogoutComponent,
    AddLoanComponent,
    UpdateLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers:[UsersService,GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
