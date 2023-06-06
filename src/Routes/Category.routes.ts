import { Router } from 'express'
import { getCategory, postCategoryHandler, deleteCategoryHandler, patchCategoryHandler } from '../controller/Category.controller';
import { Auth } from '../Utils/ValidateRoutes'
const router = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BasicAuth: 
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     CategoryDto:
 *         type: object
 *         required:
 *           - Category_name
 *           - image
 *         properties: 
 *           Category_name:
 *             type: string
 *             description: this is for name of the category
 */

/**
 * @swagger
 * tags:
 *   name: Category Record
 *   description: Record of all category CRUD
 * 
 */

/**
 * @swagger
 * /category/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Category Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new Category
 *     tags: [Category Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/CategoryDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /category/{id}:
 *  patch:
 *     summary: used to update Categorys
 *     tags: [Category Record]
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
 *             $ref: '#/components/schemas/CategoryDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Category Record]
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
    .post(postCategoryHandler);


router.route('/:id')
    .patch(patchCategoryHandler)
    .delete(deleteCategoryHandler);



export default router;
