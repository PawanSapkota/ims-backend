import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Staff } from '../entity/Staff';
import generator from 'generate-password-ts';
export interface RequestCustom extends Request {
    User: any;
    files: any
}
import { RegisterUserHandler, deleteUserHandler } from './UserController'
const StaffRepo = AppDataSource.getRepository(Staff)
export const getCategory = async (
    req: RequestCustom,
    res: Response,
    next: NextFunction,
) => {
    try {
        console.log(req.User)
        let Category = await StaffRepo.find({
            order: {
                createdAt: 'ASC'
            }
        });
        res.status(200).json({
            status: 'success',
            data: Category
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const postStaffHandler = async (
    req: RequestCustom,
    res: Response,
    next: NextFunction
) => {
    console.log(req.files, "dsds")

    try {
        if (req.files) {
            req.body.document_left = req.files.document_left[0].filename;
            req.body.document_right = req.files.document_right[0].filename;
            req.body.employee_img = req.files.employee_img[0].filename;
        }

        // if(req.body.password){
        let newPw = generator.generate({
            length: 8,
            numbers: true,
            symbols: true,
            uppercase: true
        })
        req.body.password = newPw;
        // }
        console.log(req.body)
        await StaffRepo.save(req.body).then((result: object) => {
            return RegisterUserHandler(req, res, next)
            // res.status(200).json({
            //     message: " has been added",
            //     result
            // })
        }).catch(err => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const patchCategoryHandler = async (
    req: RequestCustom,
    res: Response,
    next: NextFunction
) => {
    try {
        let Category = await StaffRepo.findOneBy({ id: req.params.id });
        if (!Category) {
            return next(new AppError(404, "cateory with this di doesn't exist"))
        }
        if (req.files.document_left) {
            Category.document_left = req.files.document_left[0].filename;
        }
        if (req.files.document_right) {
            Category.document_right = req.files.document_right[0].filename;
        }
        if (req.files.employee_img) {
            Category.employee_img = req.files.employee_img[0].filename;
        }

        Object.assign(Category, req.body);
        await StaffRepo.save(Category).then((result: object) => {
            res.status(200).json({
                message: "category has been updated",
                result
            })
        }).catch((err: any) => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const deleteCategoryHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let Category = await StaffRepo.findOneBy({ id: req.params.id });
        if (!Category) {
            return next(new AppError(404, "cateory with this di doesn't exist"))
        }
        console.log(Category.email)
        await StaffRepo.remove(Category).then((result: object) => {
            req.body.email=Category.email
            deleteUserHandler(req,res,next)
            // res.status(200).json({
            //     message: "category has been updated",
            //     result
            // })
        }).catch((err: any) => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }

}