import { Request,Response,NextFunction } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../Utils/AppError";
import { Sales } from "../entity/Sales";
const SalesRepo=AppDataSource.getRepository(Sales);
export const getSalesHandler=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        await SalesRepo.find().then((result)=>{
            res.status(200).json({
                message:'success',
            })
        }).catch(error=>{
        next(new AppError(error.statusCode,error.message))

        })
        
    } catch (error) {
        next(new AppError(error.statusCode,error.message))
    }

}


export const postSalesHandler=async (
    req:Request,
    res:Response,
    next:NextFunction
) =>{
try {
    console.log(req.body)
    
} catch (error) {
    next(new AppError(error.statusCode,error.message))
}
}