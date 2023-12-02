import { Router } from "express";
import { UserControler } from "../controlers/user.controler";

export class UserRouter{
    public router=Router()
    constructor(){
this.initialRouters()
    }
    public controler=new UserControler()
    initialRouters(){
    this.router.post('/data',this.controler.postData)
   } 

}