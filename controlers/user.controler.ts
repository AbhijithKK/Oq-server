import { Request, Response } from "express";
import { UserDto } from "../dtos/User.dto";


export class UserControler {
    public async postData(req:Request,res:Response){

        const datas:UserDto=req.body
        console.log(datas);
        
      
     
    }
}