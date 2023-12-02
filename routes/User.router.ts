import { Router } from "express";
import { UserControler } from "../controlers/user.controler";
import { dtoValidator } from "../middleweres/dtoValidaton.middlewere";
import { UserDto } from "../dtos/User.dto";

export class UserRouter {
  public router = Router();
  constructor() {
    this.initialRouters();
  }
  public controler = new UserControler();
  initialRouters() {
    this.router.post("/submitform",dtoValidator(UserDto,'body'), this.controler.postData);
  }
}
