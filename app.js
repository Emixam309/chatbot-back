const express = require('express')
const app = express()
const port = 3000

const dialogs = require('./dialogs.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dialog/questions', (req, res) => {
  const questions = dialogs.map(({id, question}) => {id, question})
  res.json(questions)
})

app.get('/dialog/answer/:id', (req, res) => {
  const dialog = dialogs.find(dialog => dialog.id === parseInt(req.params.id))
  if (!dialog) return res.status(404).send('Dialog not found')
  res.json(dialog)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})