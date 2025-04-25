import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../model/userDetails';
import { Observable } from 'rxjs';
import { AdminUserDetails } from '../model/adminuserDetails';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }

  addUser(UserDetails:UserDetails)
  :Observable<UserDetails>{
    return this.http.post<UserDetails>(this.url+'adduser',UserDetails);
  }
  isNotLogIn(){
    return !!localStorage.getItem('email');
  }
  isLogIn(){
    return !localStorage.getItem('email');
  }
  adminaddUser(adminuserDetail:AdminUserDetails):Observable<AdminUserDetails>{
    return this.http.post<AdminUserDetails>(this.url + 'adminregister',adminuserDetail);
  }

  getadminUserByEmail(email:string,password:string){

    return this.http.get(this.url + 'adminlogin/'+email+'/'+password);
  }
  getUserLogin(email:string,password:string){
    alert("service-- ");
    alert(this.http.get(this.url + 'userlogin'))
    return this.http.get('http://localhost:8081/userlogin')
    //return this.http.get(this.url + 'userlogin/'+email+'/'+password);
  }
  getAllUser():Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.url + 'adminuserdashboard');
  }
  deleteUser(id:any){
    return this.http.delete(this.url + 'deleteuser/'+id);
  }

  getUserById(id:number):Observable<UserDetails>{
    return this.http.get<UserDetails>(this.url + 'getbyUser/'+id);
  }
  editUser(user:UserDetails){
    return this.http.post(this.url + 'edituser',user);
  }
}
