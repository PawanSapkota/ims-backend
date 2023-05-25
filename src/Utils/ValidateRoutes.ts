import * as jwt from 'jsonwebtoken';
import { Request,Response,NextFunction } from 'express';
export interface RequestCustom extends Request
{
    User: any;
}
export const Auth =async(
    req: RequestCustom,res:Response,next: NextFunction
)=>{
    try {
        let token: string;
        if(req.headers.authorization.match('Bearer ')){
            console.log('working')
            token= await req.headers.authorization.split('Bearer ')[1];
        }else{
            token=await req.headers.authorization;

        }
        console.log(token," jhjhx")
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
        const user = await decodedToken;
        req.User = user;
        next();
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid request!"),
          });
    }  
};
