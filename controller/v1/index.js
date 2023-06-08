const Dialog = require('../../mongodb/dialog')

const dialogController = {
  findAll: async (req, res) => {
    const dialogs = await Dialog.find()
    res.status(200).json(dialogs)
  },
  findAllQuestions: async (req, res) => {
    const dialogs = await Dialog.find()
    const questions = dialogs.map(({_id, question}) => ({_id, question}))
    res.json(questions)
  },
  findById: async (req, res) => {
    try {
      const dialog = await Dialog.findById(req.params.id)
      res.json(dialog)
    } catch (error) {
      console.log(error)
      return res.status(404).send({message: 'Dialog not found'})
    }
  },
  search: async (req, res) => {
    const question = normalizeString(req.body.question)
    const dialogs = await Dialog.find()
    const dialogsFiltered = dialogs.filter(dialog => normalizeString(dialog.question).includes(question))
    res.json(dialogsFiltered)
  },
  create: async (req, res) => {
    const {body} = req
    const actualDate = new Date()
    const newDialog = {...body, createdAt: actualDate, editedAt: actualDate}
    if (!body) return res.json({message: 'no body'})
    const createdDialog = await Dialog.create(newDialog)
    res.status(201).json({message: 'created', dialog: createdDialog})
  },
  edit: async (req, res) => {
    try {
      const {body} = req
      const actualDate = new Date()
      const newDialog = {...body, editedAt: actualDate}
      console.log(newDialog)
      const editedDialog = await Dialog.findByIdAndUpdate(newDialog._id, newDialog)
      console.log(editedDialog)
      res.status(200).json({message: 'success'})
    } catch (e) {
      console.log('error')
    }
  },
  delete: async (req, res) => {
    const {params} = req
    await Dialog.findByIdAndDelete(params.id)
    res.status(200).json({message: 'deleted'})
  }
}


const normalizeString = (str) => {
  return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

module.exports = dialogController