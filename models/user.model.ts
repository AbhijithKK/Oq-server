
import { DataTypes, Model } from "sequelize";
import { UserInterface } from "../interfaces/user.interface";
import { sequelize } from ".";

export class UserModel extends Model<UserInterface> implements UserInterface{
   public fullName: string;
  public compName: string;
  public  email: string;
  mobNumber: number;
  workShop: string;

}

UserModel.init({
    compName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobNumber:{
        type:DataTypes.NUMBER,
        unique:true,
        allowNull:false
    },
    workShop:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    sequelize:sequelize,
    tableName:"User"
})