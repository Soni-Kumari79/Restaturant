import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../model/userDetails';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:UserDetails;
  constructor(private userservice:UserService,private router:Router) {
    this.user=new UserDetails('','','','','','');
   }

  ngOnInit(): void {
  }

  register()
  {
    this.userservice.addUser(this.user).subscribe(res=>{res});
    this.router.navigate(['/login']);
  }


}
