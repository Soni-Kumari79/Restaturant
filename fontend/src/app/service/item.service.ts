import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../model/Item';
import { Observable } from 'rxjs';
import { orderedfood } from '../model/orderedfood';
import { foodlist } from '../model/foodlist';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = 'http://localhost:8081/';
  date!:string;
  constructor(private http: HttpClient) { }
  addItem(items:Items):Observable<Items>{
    return this.http.post<Items>(this.url + 'addbook',items);
  }
  getAllItems():Observable<Items[]>{
    return this.http.get<Items[]>(this.url + 'admindashboard');
 }
 orderedfoodlist(email:string,date:string,food:Items[]):Observable<orderedfood[]>{
  return this.http.post<orderedfood[]>(this.url + 'orderedfood/'+email+"/"+date,food);
}
gettodaybill():Observable<orderedfood[]>{
  this.date=new Date().toDateString();
  console.log(this.date);
  return this.http.get<orderedfood[]>(this.url+'gettodaybill/'+this.date);
}
getmonthbill():Observable<orderedfood[]>{
  this.date=new Date().toDateString();
  console.log(this.date);
  return this.http.get<orderedfood[]>(this.url+'getmonthbill/'+this.date);
}

deleteItem(id:any){
  return this.http.delete(this.url + 'deletebook/'+id);
}

getBookById(id:number):Observable<Items>{
  return this.http.get<Items>(this.url + 'getbyBook/'+id);
}

getAddedFav(email:string):Observable<orderedfood[]>{
  return this.http.get<orderedfood[]>(this.url + 'getaddedfav/'+email);
}
getReadlater(email:string):Observable<orderedfood[]>{
  return this.http.get<orderedfood[]>(this.url + 'getreadlater/'+email);
}

editBook(book:Items){
  return this.http.post(this.url + 'editbooks',book);
}



addFoodList(book:Items){
  let id=foodlist.length+1;
  book.id=id;
  foodlist.push(book);
}

grandtotal(){
  let total=0;
  foodlist.map((a:any)=>{
      total +=a.price;
    });
}

}
