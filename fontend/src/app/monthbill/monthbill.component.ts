import { Component, OnInit } from '@angular/core';
import { orderedfood } from '../model/orderedfood';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-monthbill',
  templateUrl: './monthbill.component.html',
  styleUrls: ['./monthbill.component.css']
})
export class MonthbillComponent implements OnInit {
  email:string | null=localStorage.getItem('email');
  item:orderedfood[];
  constructor(private foodservice:ItemService) {
    this.item=[]
   }

  ngOnInit(): void {
    this.foodservice.getmonthbill().subscribe(data=>this.item=data);
  }

}
