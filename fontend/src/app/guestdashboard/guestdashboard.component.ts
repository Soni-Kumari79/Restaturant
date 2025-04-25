import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { foodlist } from '../model/foodlist';
import { Items } from '../model/Item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-guestdashboard',
  templateUrl: './guestdashboard.component.html',
  styleUrls: ['./guestdashboard.component.css']
})
export class GuestdashboardComponent implements OnInit {
  email:any =localStorage.getItem('email');
  item!:Items[];
  sum:number=0;
  foodlists:Items[];
  total:any=0;
  quantity:number=0;
  date:any;
  constructor(private userservice:ItemService,private router:Router) {
    this.foodlists=[];
   }
  
  ngOnInit(): void {
    this.foodlists=foodlist;
    this.userservice.getAllItems().subscribe(data=>{this.item=data});
    this.date=new Date().toDateString();
    
  }
  

  addlist(item:Items){
    this.userservice.addFoodList(item);
    console.log(foodlist);
    this.total+=(item.price*item.quality);
    console.log(this.total);
  }

  order(){
    this.userservice.orderedfoodlist(this.email,this.date,this.foodlists).subscribe(data=>data);
    alert("Data added");
  }

}
