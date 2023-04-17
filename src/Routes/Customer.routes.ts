import {Router} from 'express';
import {deleteCustomerHandler, getCustomerHandler, getSingleCustomerHandler, updateCustomerHandler} from '../controller/Customer.controller';
const router=Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     CustomerDto:
 *         type: object
 *         properties: 
 *           name:
 *             type: string
 *             description: this is for name of the category
 *           address:
 *             type: string
 *             description: this is for customer address
 *           contact_no:
 *             type: string
 *             description: this is for contact number
 *           email:
 *             type: string
 *             description: this is for email address of customer
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
.get(getCustomerHandler);

router
.route('/:id')
.get(getSingleCustomerHandler)
.patch(updateCustomerHandler)
.delete(deleteCustomerHandler);

export default router;
