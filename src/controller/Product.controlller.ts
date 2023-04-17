import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Product } from '../entity/Product';
import { Brand } from '../entity/Brand';
import { Category } from '../entity/Category';



const ProductRepo = AppDataSource.getRepository(Product);
const BrandRepo = AppDataSource.getRepository(Brand);
const CategoryRepo = AppDataSource.getRepository(Category);


export const getProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await ProductRepo.find().then(result => {
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
export const getSingleProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try { 
        await ProductRepo.findOneBy({id:req.params.id}).then(result => {
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

export const postProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.body)

        let brand = await BrandRepo.findOneBy({ id: req.body.product_brand });
        let category = await CategoryRepo.findOneBy({ id: req.body.product_category });
        if(!brand){
            return  next(new AppError(404, 'brand with this id doesnt exist'))
        }
        if(!category){
            return  next(new AppError(404, 'category with this id doesnt exist'))
        }
        req.body.product_brand = brand;
        req.body.product_category = category;
        req.body.image = req.file.filename;
        console.log(brand,category,req.body.priceandunit);
let newUnits=[];
        req.body.priceandunit.map((val,i)=>{
            let data=JSON.parse(val);
            newUnits.push(data)
        })

        req.body.priceandunit=[...newUnits];

        await ProductRepo.save(req.body).then((result) => {
            res.status(200).json({
                status: "product has been added",
                result
            })
        }).catch(err => {
            next(new AppError(err.statusCode, err.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}


export const updateProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        let brand = await BrandRepo.findOneBy({ id: req.body.product_brand });
        let category = await CategoryRepo.findOneBy({ id: req.body.product_category });
        if (brand) {
            req.body.product_brand = brand;
        }
        if (category) {
            req.body.product_category = category;
        }
        let Product = await ProductRepo.findOneBy({ id: req.params.id });
        if (!Product) {
            return next(new AppError(404, "Product with this di doesn't exist"))
        }
        req.body.image = req.file ? req.file.filename : Product.image;

        Object.assign(Product, req.body);
        await ProductRepo.save(req.body).then((result) => {
            res.status(200).json({
                status: "product has been added",
                result
            })
        }).catch(err => {
            next(new AppError(err.statusCode, err.message))
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}


export const deleteProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let Product = await ProductRepo.findOneBy({ id: req.params.id });
        if (!Product) {
            return next(new AppError(404, "Product with this id doesn't exist"))
        }
        await ProductRepo.remove(Product).then((result: object) => {
            res.status(200).json({
                message: "Product has been deleted",
                result
            })
        }).catch((err: any) => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }

}