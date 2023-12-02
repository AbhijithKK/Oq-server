import { Request, Response, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";
export const dtoValidator =  ( dto: any, value: "body" | "params" | "query") => {
  return async(req: Request, res: Response, next: NextFunction) => {
    const datas = plainToClass(dto, req[value]);
    const errors: ValidationError[] = await validate(datas);
    if (errors.length > 0) {
      let errMsg = errors.map((val: any) => {
        
        return   Object.values(val.constraints)[0]
      });
      res.json({message:errMsg})
    } else {
      next();
    }
  };
};
