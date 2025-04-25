import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminuserdashboardComponent } from './adminuserdashboard/adminuserdashboard.component';
import { ItemComponent } from './item/item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EdituserComponent } from './edituser/edituser.component';
import { GuestdashboardComponent } from './guestdashboard/guestdashboard.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MonthbillComponent } from './monthbill/monthbill.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { TodaybillComponent } from './todaybill/todaybill.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    AdduserComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    AdminregisterComponent,
    AdminuserdashboardComponent,
    ItemComponent,
    DashboardComponent,
    EdititemComponent,
    EdituserComponent,
    GuestdashboardComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    MonthbillComponent,
    PagenotfoundComponent,
    RegisterComponent,
    TodaybillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
