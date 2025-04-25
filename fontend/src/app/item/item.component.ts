import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../model/Item';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 
  @Input()
  item:Items;
  email:any =localStorage.getItem('email');
  constructor(private userservice:UserService,private router:Router) {
    this.item=new Items('','',0,0);
   }

  ngOnInit(): void {
  }

  
}
