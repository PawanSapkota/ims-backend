import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Services} from "../entity/Service"
import AppError from '../Utils/AppError';


const ServiceRepo = AppDataSource.getRepository(Services);


export const getServiceHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await ServiceRepo.find().then(result => {
            res.status(200).json({
                status: 'success',
                result
            })
        }).catch(error => {
            next(new AppError(error.statusCode, error.message))
        })

    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }
}


export const postServiceHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.body)

        req.body.image = req.file.filename;
let product=[];
        req.body.priceUnit.map((val,i)=>{
            let data=JSON.parse(val);
            product.push(data)
        })
        console.log(product)

        req.body.product=[...product];

        await ServiceRepo.save(req.body).then((result) => {
            res.status(200).json({
                status: "service has been added",
                result
            })
        }).catch(err => {
            next(new AppError(err.statusCode, err.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const updateServiceHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log(req.body,req.file);
        let Service=await ServiceRepo.findOneBy({id:req.params.id});
        if(!Service){
            return next(new AppError(404,"Brand with this id not found" ));
        }
        req.body.image = req.file ? req.file.filename : Service.image;


console.log(req.body)
        Object.assign(Service,req.body);
        await ServiceRepo.save(Service).then(result=>{
            console.log(result)
            res.status(200).json({
                message: "working",
                result
            })
        }).catch(err=>{
            res.status(500).json({
                message: "Error creating service",
                err,
            });
        })
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({
                status: 'fail',
                msg: error.message,
                message: 'service with that name already exist',
            });
        }
    }
  }


export const deleteServiceHandler=async(
    req:Request,res:Response,next:NextFunction
  )=>{
    try {
        let Service=await ServiceRepo.findOneBy({id:req.params.id});
        if(!Service){
            return next(new AppError(404,"Brand with this id not found"))
        }
        await ServiceRepo.remove(Service).then((result:any)=>{
            console.log(result);
            res.status(200).json({
                message:'service has beed deleted successfully',
                result
            })
        }).catch((err:any)=>{
            console.log(err)
            next (new AppError(err.statusCode,err.message))
        })
    } catch (error:any) {
        next(new AppError(error.statusCode, error.message))
    }
  }