import { IsEmail, IsEmpty, IsNotEmpty, Length } from "class-validator";

export class UserDto {
  @IsNotEmpty({ message: "Name Minimum 3 character Required" })
  @Length(3, 225, { message: "Name Minimum 3 character Required" })
  fullName: string;

  @IsNotEmpty({ message: "Enter Your mobile Number" })
  @Length(10, 10, { message: "enter your 10 digit mobile number" })
  mobNumber: number;

  @IsEmail({}, { message: "Enter a proper Email Address" })
  email: string;

  @IsNotEmpty({ message: "Company Name Required" })
  compName: string;

  @IsNotEmpty({ message:"Choose a field"})
  @Length(2, 225, { message: "Choose a Field" })

  workShop: string;
}
