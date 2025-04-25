import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../model/userDetails';

import { UserService } from '../service/user.service';
@Component({
  selector: 'app-adminuserdashboard',
  templateUrl: './adminuserdashboard.component.html',
  styleUrls: ['./adminuserdashboard.component.css']
})
export class AdminuserdashboardComponent implements OnInit {
  email:string | null=localStorage.getItem('email');
  user:UserDetails[] |undefined;
  constructor(private userservice:UserService,private router:Router) {
   }
  
  ngOnInit(): void {
    this.userservice.getAllUser().subscribe((data: any)=>{this.user=data;console.log(data)})
  }

  delete(user:UserDetails){
    this.userservice.deleteUser(user.id).subscribe(res=>{window.location.reload()});
  }
  edit(user:UserDetails){
    this.router.navigate(['editUser',user.id]);
  }
 

}
