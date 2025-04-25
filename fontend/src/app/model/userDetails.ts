export class UserDetails{
    constructor(public firstname:string,
       public lastname:string,
       public email:string,
       public phone:string,
       public password:string,
       public confirm_password:string,
       public id?:number){
    }
    
 }