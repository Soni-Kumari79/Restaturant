import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserDetails } from '../model/adminuserDetails';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  user:AdminUserDetails;
  constructor(private userservice:UserService,private router:Router) {
    this.user= new AdminUserDetails('','','','','','');
   }

  ngOnInit(): void {
  }

  register()
  {
    this.userservice.adminaddUser(this.user).subscribe(res=>{res});
    console.log(this.user);
    this.router.navigate(['/adminlogin']);
  }


}
