import { IsEmail, IsEmpty, IsNotEmpty, Length } from "class-validator";

export class UserDto {
  @IsNotEmpty({ message: "Name at least 3 more charactr" })
  @Length(3, 225, { message: "Name at least 3 more charactr" })
  fullName: string;

  @IsNotEmpty({ message: "Enter Your mobile Number" })
  @Length(10, 10, { message: "enter yout 10 digit number" })
  mobNumber: number;

  @IsEmail({}, { message: "Enter a proper Email Address" })
  email: string;

  @IsNotEmpty({ message: "Name at least 3 more charactr" })
  @Length(3, 225, { message: "Name at least 3 more charactr" })
  compName: string;

  @IsNotEmpty({ message:"Choose afield"})
  workShop: string;
}
