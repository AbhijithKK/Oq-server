
import { Sequelize } from "sequelize";


export const sequelize=new Sequelize({
  dialect:"postgres",
  username:"postgres",
  password:"root",
  host:'localhost',
  port:5432,
  database:"temp1",
  sync:{alter:true,logging:true},
  logging:true
})
