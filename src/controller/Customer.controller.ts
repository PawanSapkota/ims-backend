import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import {Customer} from '../entity/Customer';
import {Response,Request,NextFunction} from 'express';

const CustomerRepo=AppDataSource.getRepository(Customer);

export const getCustomerHandler=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        await CustomerRepo.find().then(result=>{
            res.status(200).json({
                message:'customer has been fetched',
                result
            })
        }).catch(err=>{
            next (new AppError(500,err.message))
        })
    } catch (error) {
        next(new AppError(error.statusCode,error.message))
    }
}

export const getSingleCustomerHandler=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        await CustomerRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:'customer has been fetched',
                result
            })
        }).catch(err=>{
            next (new AppError(500,err.message))
        })
    } catch (error) {
        next(new AppError(error.statusCode,error.message))
    }
}

export const updateCustomerHandler=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        let customer= await CustomerRepo.findOneBy({id:req.params.id});
        if(!customer){
            return next(new AppError(404,"customer with this id not found"));
        }
        Object.assign(customer,req.body)
        await CustomerRepo.save(customer).then(result=>{
            res.status(200).json({
                message:'customer has been updated',
                result
            })
        }).catch(err=>{
            next (new AppError(500,err.message))
        })
    } catch (error) {
        next(new AppError(error.statusCode,error.message))
    }
}

export const deleteCustomerHandler=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        let customer= await CustomerRepo.findOneBy({id:req.params.id});
        if(!customer){
            return next(new AppError(404,"customer with this id not found"));
        }
        await CustomerRepo.remove(customer).then(result=>{
            res.status(200).json({
                message:'customer has been deleted',
                result
            })
        }).catch(err=>{
            next (new AppError(500,err.message))
        })
    } catch (error) {
        next(new AppError(error.statusCode,error.message))
    }
}