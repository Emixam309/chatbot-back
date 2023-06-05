const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const port = 3000

app.use(cors())

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chat Bot API'
    },
    servers: [{ url: '/api/v1' }]
  },
  apis: ['./routes/v1/*.js'], // files containing annotations as above
};
const swaggerSpec = swaggerJsdoc(options);

app.use('/api/v1', require('./routes/v1'))
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('*', (req, res) => {
  res.status(404).json({message: 'Not found'})
})
mongoose.connect(process.env.MONGO)
  .then(() => {console.log('Connected to database!')})
  .catch((error) => {console.log('Connection failed:', error)})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})