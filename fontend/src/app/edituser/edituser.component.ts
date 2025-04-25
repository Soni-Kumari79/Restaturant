import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../model/userDetails';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user:UserDetails;
  constructor(private userservice:UserService,private router:Router,private route:ActivatedRoute) {
    this.user=new UserDetails('','','','','','');
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let ids:string=<string>params.get('id');
      this.userservice.getUserById(parseInt(ids)).subscribe(data=>this.user=data);
    });
  }
  
  edit(){
    this.userservice.editUser(this.user).subscribe(res=>{res});
    this.router.navigate(['adminuserdashboard']);
  }


}
