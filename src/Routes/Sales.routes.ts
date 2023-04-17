import {Router} from 'express';
import {getSalesHandler} from '../controller/Sales.controller'

const router=Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     SalesDto:
 *         type: object
 *         properties: 
 *           product_name:
 *             type: string
 *             description: this is for name of the product
 *           unit:
 *             type: string
 *             description: this is for unit 
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
 *             type: string
 *             description: this is for product id
 *           CustomerId:
 *             type: string
 *             description: this is for customer id
 *           
 */

/**
 * @swagger
 * tags:
 *   name: Customer Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /customer/:
 *  get:
 *     summary: Use to request all customer Record
 *     tags: [Customer Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * /customer/{id}:
 *  patch:
 *     summary: used to update customer
 *     tags: [Customer Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all customer Record
 *     tags: [Customer Record]
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
.get(getSalesHandler)




export default router;