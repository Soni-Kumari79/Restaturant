import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../model/userDetails';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  firstname!: string;
  lastname!:string;
  email!:string;
  phone!:string;
  password!:string;
  confirm_password!:string;
  user:UserDetails | undefined;
  constructor(private userservice:UserService,private router:Router) {
    
   }

  ngOnInit(): void {
  }

  adduser()
  {
    this.user=new UserDetails(this.firstname,this.lastname,this.email,this.phone,this.password,this.confirm_password);
    this.userservice.addUser(this.user).subscribe(res=>{res});
    console.log(this.userservice);
    this.router.navigate(['/adminuserdashboard']);
  }


}
