import { Router } from "express";
import { UserControler } from "../controlers/user.controler";

export class UserRouter{
    public router=Router()
    public controler=new UserControler()
    constructor(){}
   public initialRouters(){
    this.router.post('/data',this.controler.postData)
   } 

}