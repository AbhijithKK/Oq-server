import { Request, Response } from "express";
import { UserDto } from "../dtos/User.dto";
import { UserServices } from "../services/user.services";

export class UserControler {
  async postData(req: Request, res: Response) {
    try {
        const servicess = new UserServices();

      const datas: UserDto = req.body;

      const data=await servicess.postData1(datas)
      if (data) {
        res.status(200).json({message:['true']})
      }
    } catch (error:any) {
        const val=Object.values(error?.errors[0])
        
        res.json({message:[val[0]]})

    }
  }
}
