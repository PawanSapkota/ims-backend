import {Router} from 'express'
import {getCategory,postStaffHandler,deleteCategoryHandler,patchCategoryHandler} from '../controller/Staff.controller';
import {Auth} from '../Utils/ValidateRoutes'
import {upload} from '../Utils/UploadFile'
const router = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BasicAuth: 
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     StaffDto:
 *         type: object
 *         properties: 
 *           staff_name:
 *             type: string
 *             description: this is for name of the category
 *           address:
 *             type: string
 *             description: this is for name of the category 
 *           phone_no:
 *             type: string
 *             description: this is for name of the category 
 *           email:
 *             type: string
 *             description: this is for name of the category 
 *           salary:
 *             type: string
 *             description: this is for name of the category
 *           role:
 *             type: string
 *             description: this is for name of the category
 *           document_left:
 *             type: file
 *             description: this is for name of the category 
 *           document_right:
 *             type: file
 *             description: this is for name of the category
 *           employee_img:
 *             type: file
 *             description: this is for name of the category
 */

/**
 * @swagger
 * tags:
 *   name: Staff Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /staff/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Staff Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new Category
 *     tags: [Staff Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema: 
 *             $ref: '#/components/schemas/StaffDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /staff/{id}:
 *  patch:
 *     summary: used to update Categorys
 *     tags: [Staff Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/StaffDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Staff Record]
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
.get(getCategory)
.post(upload.fields([
    {
        name:'document_left',
    },
    {
        name:'document_right',
    },
    {
        name:'employee_img',
    },
]),postStaffHandler);


router.route('/:id')
.patch(upload.fields([
    {
        name:'document_left',
    },
    {
        name:'document_left',
    },
    {
        name:'document_left',
    },
]),patchCategoryHandler)
.delete(deleteCategoryHandler);



export default router;
