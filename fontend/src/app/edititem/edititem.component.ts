import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../model/Item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  item:Items;
  constructor(private bookservice:ItemService,private router:Router,private route:ActivatedRoute) {
    this.item=new Items('','',0,0);
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let ids:string=<string>params.get('id');
      this.bookservice.getBookById(parseInt(ids)).subscribe(data=>{this.item=data});
    });
  }
  
  edit(){
    this.bookservice.editBook(this.item).subscribe(res=>{res});
    this.router.navigate(['adminbookdashboard']);
  }

}
