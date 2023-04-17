import { AppDataSource } from "../data-source";
import AppError from "../Utils/AppError";
import { recivedPayment } from '../entity/RecivedPayment';
import { MakePayment } from '../entity/MakePayment';
import { NextFunction, Request, Response } from 'express';

const MakePaymentRepo = AppDataSource.getRepository(MakePayment);
const RecivedPaymentRepo = AppDataSource.getRepository(recivedPayment);

export const getPaymentHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {

        let recivedPayment = await RecivedPaymentRepo.find();
        let makePayment = await MakePaymentRepo.find();

        res.status(200).json({
            message: 'success',
            data: [...recivedPayment, ...makePayment]
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}


export const postRecivedPaymenthandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await RecivedPaymentRepo.save(req.body).then(result => {
            res.status(200).json({
                statsu: "information has been added",
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }

}


export const updateRecivedPaymenthandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let recived=await RecivedPaymentRepo.findOneBy({id:req.params.id});
        if(!recived){
            return next(new AppError(404,"payment detail not found"))
        }
        Object.assign(recived,req.body)
        await RecivedPaymentRepo.save(recived).then(result => {
            res.status(200).json({
                statsu: "information has been updated",
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }

}


export const deleteRecivedPaymenthandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let recived=await RecivedPaymentRepo.findOneBy({id:req.params.id});
        if(!recived){
            return next(new AppError(404,"payment detail not found"))
        }
        await RecivedPaymentRepo.remove(recived).then(result => {
            res.status(200).json({
                statsu: "information has been updated",
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }

}


export const postMakePaymenthandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await MakePaymentRepo.save(req.body).then(result => {
            res.status(200).json({
                statsu: "information has been added",
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }

}


export const updateMakePaymenthandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let recived=await MakePaymentRepo.findOneBy({id:req.params.id});
        if(!recived){
            return next(new AppError(404,"payment detail not found"))
        }
        Object.assign(recived,req.body)
        await MakePaymentRepo.save(recived).then(result => {
            res.status(200).json({
                statsu: "information has been updated",
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }

}


export const deleteMakePaymenthandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let recived=await MakePaymentRepo.findOneBy({id:req.params.id});
        if(!recived){
            return next(new AppError(404,"payment detail not found"))
        }
        await MakePaymentRepo.remove(recived).then(result => {
            res.status(200).json({
                statsu: "information has been updated",
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }

}