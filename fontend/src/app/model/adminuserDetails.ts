export class AdminUserDetails{
    constructor(public firstName:string,
       public lastName:string,
       public email:string,
       public phone:string,
       public password:string,
       public confirmPassword:string,
       public id?:number){
    }
    
 }