import { Request, Response } from "express";
import { UserDto } from "../dtos/User.dto";
import { UserServices } from "../services/user.services";

export class UserControler {
  async postData(req: Request, res: Response) {
    try {
        const servicess = new UserServices();

      const datas: UserDto = req.body;

      const data=await servicess.postData1(datas)
      console.log('gggggggg',data);
    } catch (error) {
      console.log(error);
    }
  }
}
