import { Request, Response } from "express";
import { UserDto } from "../dtos/User.dto";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export class UserControler {
    public async postData(req:Request,res:Response){

        const datas:UserDto=plainToClass(UserDto,req.body)
      const co:any=await validate(datas)
     console.log(Object.values(co[0].constraints));
     console.log(co[0].value);
     
    }
}