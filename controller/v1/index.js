const Dialog = require('../../mongodb/dialog')

const dialogController = {
  home: (req, res) => {
    res.send('Hello World!')
  },
  findAllQuestions: async (req, res) => {
    const dialogs = await Dialog.find()
    console.log(dialogs)
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
  }
}


const normalizeString = (str) => {
  return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

module.exports = dialogController