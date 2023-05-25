import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import AppError from '../Utils/AppError'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import HTML_TEMPLATE from '../View/mail-template';
import SENDMAIL from '../Utils/Mail';


const userRepository = AppDataSource.getRepository(User)

export const RegisterUserHandler = async (
  req: Request, res: Response, next: NextFunction
) => {
  try {
    console.log(req.body)
    let oldPassword = '';
    await bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        console.log(hashedPassword);
        let oldPassword = req.body.password;

        userRepository.save({
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role
        })
          .then((result: any) => {
            const message = `Hi there, your email ${req.body.email} password is ${oldPassword}`
            const options = {
              from: "VERIFICATION <nischalkarki1661@gmail.com>", // sender address
              to: req.body.email, // receiver email
              subject: "Send email in Node.JS with Nodemailer using Gmail account to test", // Subject line
              text: message,
              html: HTML_TEMPLATE(message),
            }

            SENDMAIL(options, (info) => {
              console.log("Email sent successfully");
              return console.log("MESSAGE ID: ", info.messageId);
            });
            res.status(201).json({
              message: "User Created Successfully",
              result,
              password: oldPassword
            });
          })
          .catch((e) => {
            res.status(500).json({
              message: "Error creating user",
              e,
            });
          });
      })
      .catch((e) => {
        res.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message))

  }
}

export const AllUser = async (
  req: Request, res: Response, next: NextFunction
) => {
  try {
    await userRepository.find().then((result) => {
      res.status(201).json({
        message: "User Created Successfully",
        result,
      });
    }).catch(e => {
      res.status(500).json({
        message: "Password was not hashed successfully",
        e,
      });
    })
  } catch (error) {
    next(new AppError(error.statusCode, error.message))
  }
}

export const LoginUserHandler = async (
  req: Request, res: Response, next: NextFunction
) => {
  try {
    console.log(req.body)
    let User = await userRepository.findOneBy({ email: req.body.email });
    console.log(User)

    bcrypt.compare(req.body.password, User.password, function (err, data) {
      console.log(err, data);
      if (err) {
        res.status(400).json({
          message: "password does not match",
        });
      }
      if (data) {
        //   create JWT token
        const token = jwt.sign(
          {
            userId: User.id,
            userEmail: User.email,
            userRole: User.role
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );

        console.log(jwt.verify(token, "RANDOM-TOKEN"))

        //   return success response
        res.status(200).json({
          message: "Login Successful",
          email: User.email,
          role: User.role,
          token,
        });
      }
    })
  } catch (error) {
    next(new AppError(error.statusCode, error.message))

  }
}

export const deleteUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let Category = await userRepository.findOneBy({ email: req.body.email });
        if (!Category) {
            return next(new AppError(404, "cateory with this di doesn't exist"))
        }
        console.log(Category)
        await userRepository.remove(Category).then((result: object) => {
            res.status(200).json({
                message: "category has been deleted",
                result
            })
        }).catch((err: any) => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }

}