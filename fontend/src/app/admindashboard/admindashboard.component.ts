import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../model/Item';
import { ItemService } from '../service/item.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {


  email:string | null=localStorage.getItem('email');
  item:Items[] |undefined;
  constructor(private userservice:ItemService,private router:Router) {
   }
  
  ngOnInit(): void {
    this.userservice.getAllItems().subscribe(data=>{this.item=data})
  }

  delete(item:Items){
    this.userservice.deleteItem(item.id).subscribe(res=>{window.location.reload()});
  }

  edit(item:Items){
    this.router.navigate(['editbook',item.id]);
  }

}
