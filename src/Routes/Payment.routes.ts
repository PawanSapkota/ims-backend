import {deleteRecivedPaymenthandler, getPaymentHandler, postRecivedPaymenthandler, updateRecivedPaymenthandler} from '../controller/Payment.controller';
import {Router} from 'express';

const router=Router();


/**
 * @swagger
 * tags:
 *   name: Payment Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /payment/:
 *  get:
 *     summary: Use to request all  Record
 *     tags: [Payment Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 */

router
.route('/')
.get(getPaymentHandler);



/**
 * @swagger
 * components:
 *   schemas:
 *     RecivedPaymentDto:
 *         type: object
 *         properties: 
 *           recived_from:
 *             type: string
 *             description: this is for name of the category
 *           amount:
 *             type: string
 *             description: this is for amount 
 *           reason:
 *             type: string
 *             description: this is for reason on why money was recived
 *           category:
 *             type: string
 *             description: this is for  the category of reciving money
 *           status:
 *             type: string
 *             description: this is for payment status
 */


/**
 * @swagger
 * /payment/recivepayment/:
 *  post:
 *     summary: used to add new payment
 *     tags: [Payment Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/RecivedPaymentDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /payment/recivepayment/{id}:
 *  patch:
 *     summary: used to update recived payment
 *     tags: [Payment Record]
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
 *             $ref: '#/components/schemas/RecivedPaymentDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all  Record
 *     tags: [Payment Record]
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
.route('/recivepayment/')
.post(postRecivedPaymenthandler);


router
.route('/recivepayment/:id')
.patch(updateRecivedPaymenthandler)
.delete(deleteRecivedPaymenthandler);





/**
 * @swagger
 * components:
 *   schemas:
 *     MakePaymentDto:
 *         type: object
 *         properties: 
 *           reciver_name:
 *             type: string
 *             description: this is for name of the category
 *           amount:
 *             type: string
 *             description: this is for amount 
 *           reason:
 *             type: string
 *             description: this is for reason on why money was recived
 *           category:
 *             type: string
 *             description: this is for  the category of reciving money
 *           status:
 *             type: string
 *             description: this is for payment status
 */



/**
 * @swagger
 * /payment/makepayment/:
 *  post:
 *     summary: used to add new payment
 *     tags: [Payment Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/MakePaymentDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /payment/makepayment/{id}:
 *  patch:
 *     summary: used to update recived payment
 *     tags: [Payment Record]
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
 *             $ref: '#/components/schemas/MakePaymentDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all  Record
 *     tags: [Payment Record]
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
 .route('/makepayment/')
 .post(postRecivedPaymenthandler);
 
 
 router
 .route('/makepayment/:id')
 .patch(updateRecivedPaymenthandler)
 .delete(deleteRecivedPaymenthandler);

export default router;