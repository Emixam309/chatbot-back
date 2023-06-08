const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const dialogController = require('../../controller/v1/index')

const jsonParser = bodyParser.json()

/**
 * @swagger
 *
 * /dialog:
 *   get:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Get all dialogs
 *     description: Get all dialogs
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/dialog', dialogController.findAll)

/**
 * @swagger
 *
 * /dialog/{id}:
 *   get:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Get answer by id
 *     description: Get answer by id
 *     parameters:
 *     - name: id
 *       in: path
 *       description: ID of the dialog
 *       required: true
 *       schema:
 *         type: number
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Dialog not found
 */
router.get('/dialog/:id', dialogController.findById)

/**
 * @swagger
 *
 * /dialog:
 *   post:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Create dialog
 *     description: Create dialog
 *     responses:
 *       '200':
 *         description: Creation success
 */
router.post('/dialog', jsonParser, dialogController.create)

/**
 * @swagger
 *
 * /dialog:
 *   patch:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Patch dialog
 *     description: Patch dialog
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.patch('/dialog', jsonParser, dialogController.edit)

/**
 * @swagger
 *
 * /dialog:
 *   delete:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Delete dialog
 *     description: Delete dialog
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.delete('/dialog/:id', dialogController.delete)

/**
 * @swagger
 *
 * /dialog/question:
 *   get:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Get all questions
 *     description: Get all questions
 */
router.get('/dialogs/questions', dialogController.findAllQuestions)

/**
 * @swagger
 *
 * /dialog/question:
 *   post:
 *     tags:
 *     - Dialog
 *     produces:
 *       - application/json
 *     summary: Search questions
 *     description: Search questions
 */
router.post('/dialogs/questions', jsonParser, dialogController.search)

module.exports = router