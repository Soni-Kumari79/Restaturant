import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../model/Item';
import { ItemService } from '../service/item.service';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  name!: string;
  price!:number;
  quality!:number;
  imageId!:string;
  item:Items | undefined;
  constructor( private itemservice:ItemService,private router:Router ) { }

  ngOnInit(): void {
  }

  additem()
  {
    this.item=new Items(this.name,this.imageId,this.price,this.quality);
    this.itemservice.addItem(this.item).subscribe(res=>{res});
    // console.log(this.bookservice);
    this.router.navigate(['/adminbookdashboard']);
  }

}
