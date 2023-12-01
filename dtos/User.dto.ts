import { IsEmail, IsEmpty, Length } from "class-validator";

export class UserDto {
  @IsEmpty({ message: "Name at least 3 more charactr" })
  @Length(3, 225, { message: "Name at least 3 more charactr" })
  fullName: string;

  @IsEmpty({ message: "Enter Your mobile Number" })
  @Length(10, 10, { message: "enter yout 10 digit number" })
  mobNumber: number;

  @IsEmail({}, { message: "Enter a proper Email Address" })
  email: string;

  @IsEmpty({ message: "Name at least 3 more charactr" })
  @Length(3, 225, { message: "Name at least 3 more charactr" })
  compName: string;

  @IsEmpty({ message:"Choose afield"})
  workShop: string;
}
