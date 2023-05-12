const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const dialogController = require('../../controller/v1/index')

const jsonParser = bodyParser.json()

/**
 * @swagger
 *
 * /:
 *   get:
 *     summary: Send Hello World
 *     description: Send Hello World
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', dialogController.home)

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
 *     summary: Post question
 *     description: Post question
 */
router.get('/dialog/:id', dialogController.findById)

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
router.get('/dialog/questions', dialogController.findAllQuestions)

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
router.post('/dialog/questions', jsonParser, dialogController.search)

module.exports = router