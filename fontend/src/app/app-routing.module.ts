import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminuserdashboardComponent } from './adminuserdashboard/adminuserdashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EdituserComponent } from './edituser/edituser.component';
import { GuestdashboardComponent } from './guestdashboard/guestdashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MonthbillComponent } from './monthbill/monthbill.component';
import { RegisterComponent } from './register/register.component';
import { TodaybillComponent } from './todaybill/todaybill.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'guest_dashboard',component:GuestdashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'adminbookdashboard',component:AdmindashboardComponent},
  {path:'adminuserdashboard',component:AdminuserdashboardComponent},
  {path:'editbook/:id',component:EdititemComponent},
  {path:'editUser/:id',component:EdituserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'addbook',component:AdditemComponent},
  {path:'todaybill',component:TodaybillComponent},
  {path:'monthbill',component:MonthbillComponent},
  //{path:'',component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
