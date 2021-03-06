import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { GlobalDataService } from './service/global-data.service';
import { LogoutComponent } from './logout/logout.component';
import { AddLoanComponent } from './addloan/addloan.component';
import { UpdateLoanComponent } from './updateloan/updateloan.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SearchComponent,
    HeaderComponent,
    LogoutComponent,
    AddLoanComponent,
    UpdateLoanComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers:[GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
