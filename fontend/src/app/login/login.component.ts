import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../model/userDetails';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email:any | undefined;
  password:any | undefined;

  user:UserDetails | undefined;
  constructor(private router:Router,private userservice:UserService) {
    
   }

  ngOnInit(): void {
  }
  login()
  {
    console.log(this.email,"--",this.password);
     alert("1")
    this.userservice.getUserLogin(this.email,this.password).subscribe(res=>{
      alert("The resposne is: "+res)
      if(res){
        alert(" inside");
        console.log("logined");
        localStorage.setItem('email',this.email);
        this.router.navigate(['dashboard']);
      }
      else{
        alert("inside else..")
        document.getElementById('error')!.style.display='block';
      }
    });
    
  }

}
