const express = require('express')
const app = express()
const connectDB = require('./config/db')
const port = 3000
const cors = require('cors');

app.use(express.json()) // for parsing application/json
app.use(cors())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const userrouter = require('./router/users')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userrouter)
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})