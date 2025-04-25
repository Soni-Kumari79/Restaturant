import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserDetails } from '../model/adminuserDetails';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  email:any | undefined;
  password:any | undefined;

  user:AdminUserDetails | undefined;
  constructor(private router:Router,private userservice:UserService) {
    
   }

  ngOnInit(): void {
  }
  login()
  {
    console.log(this.email,"--",this.password);
    this.userservice.getadminUserByEmail(this.email,this.password).subscribe(res=>{
      if(res){
        console.log("logined");
        localStorage.setItem('email',this.email);
        this.router.navigate(['adminbookdashboard']);
      }
      else{
        document.getElementById('error')!.style.display='block';
      }
    })
    
    
  }

}
