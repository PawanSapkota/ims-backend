import {Router} from 'express';
import {getServiceHandler,postServiceHandler,deleteServiceHandler,updateServiceHandler} from '../controller/Booking.controller'
import {upload} from '../Utils/UploadFile'

const router=Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     BookingDto:
 *         type: object
 *         properties: 
 *           title:
 *             type: string
 *             description: this is for name of the product
 *           price:
 *             type: string
 *             description: this is for price
 *           image:
 *             type: file
 *             description: this is for image
 *           status:
 *             type: string
 *             description: this is for vat 
 *           service:
 *             type: array
 *             description: this is for product id
 *           
 */

/**
 * @swagger
 * tags:
 *   name: Booking Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /booking/:
 *  get:
 *     summary: Use to request all  Record
 *     tags: [Booking Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to update 
 *     tags: [Booking Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/BookingDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * /booking/{id}:
 *  delete:
 *     summary: Use to request all  Record
 *     tags: [Booking Record]
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