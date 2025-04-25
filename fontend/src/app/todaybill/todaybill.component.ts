import { Component, OnInit } from '@angular/core';
import { orderedfood } from '../model/orderedfood';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-todaybill',
  templateUrl: './todaybill.component.html',
  styleUrls: ['./todaybill.component.css']
})
export class TodaybillComponent implements OnInit {

  email:string | null=localStorage.getItem('email');
  item:orderedfood[];
  constructor(private foodservice:ItemService) {
    this.item=[]
   }

  ngOnInit(): void {
    this.foodservice.gettodaybill().subscribe(data=>this.item=data);
  }

}
