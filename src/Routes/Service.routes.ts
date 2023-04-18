import {Router} from 'express';
import {getServiceHandler,postServiceHandler,deleteServiceHandler,updateServiceHandler} from '../controller/Service.controller'
import {upload} from '../Utils/UploadFile'

const router=Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     SalesDto:
 *         type: object
 *         properties: 
 *           service_name:
 *             type: string
 *             description: this is for name of the product
 *           quantities:
 *             type: string
 *             description: this is for cquantity
 *           price:
 *             type: string
 *             description: this is for price
 *           discount:
 *             type: string
 *             description: this is for discount
 *           vat:
 *             type: string
 *             description: this is for vat 
 *           netAmount:
 *             type: string
 *             description: this is for Net Amount
 *           paymentType:
 *             type: object
 *             description: this is for paymnet type
 *           productId:
 *             type: array
 *             description: this is for product id
 *           
 */

/**
 * @swagger
 * tags:
 *   name: Service Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /service/:
 *  get:
 *     summary: Use to request all  Record
 *     tags: [Service Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to update 
 *     tags: [Service Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * /service/{id}:
 *  delete:
 *     summary: Use to request all  Record
 *     tags: [Service Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true 
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */




router
.route('/')
.get(getServiceHandler)
.post(upload.single('image'),postServiceHandler)


router
.route('/:id')
.patch(upload.single('image'),updateServiceHandler)
.delete(deleteServiceHandler)



export default router;