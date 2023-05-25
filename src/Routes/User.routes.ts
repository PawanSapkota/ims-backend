import {Router} from 'express'
import {RegisterUserHandler,LoginUserHandler,AllUser} from '../controller/UserController';
import {upload} from '../Utils/UploadFile';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     UserDto:
 *         type: object

 *         properties: 
 *           email:
 *             type: string
 *             description: this is for category name
 *           password:
 *             type: string
 *             description: this is for image
 *           role:
 *             type: string 
 *             description: role
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserLoginDto:
 *         type: object
 *         properties: 
 *           email:
 *             type: string
 *             description: this is for category name
 *           password:
 *             type: string
 *             description: this is for image
 */

/**
 * @swagger
 * tags:
 *   name: Users Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /auth/register:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Users Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new user
 *     tags: [Users Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/UserDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /auth/register/{id}:
 *  patch:
 *     summary: used to update 
 *     tags: [Users Record]
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
 *             $ref: '#/components/schemas/UserDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Users Record]
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
 * /auth/login:
 *  post:
 *     summary: used to add new user
 *     tags: [Users Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/UserLoginDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 */

router
.route('/register/')
.get(AllUser)
.post(
// validate(CategorySchema)
RegisterUserHandler);


router
.route('/login/')
// .get(getCategory)
.post(LoginUserHandler
// validate(CategorySchema)
);



// router.route('/:id')
// .patch(upload.single('image'),patchCategoryHandler)
// .delete(deleteCategoryHandler);



export default router;
