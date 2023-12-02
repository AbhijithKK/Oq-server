import { UserDto } from "../dtos/User.dto";
import { UserModel } from "../models/user.model";

export class UserServices {
  constructor() {}

  async postData1(datas: UserDto): Promise<any> {
    try {
      let resp = await UserModel.create(datas);

      return resp;
    } catch (error) {
      throw error;
    }
  }
}
