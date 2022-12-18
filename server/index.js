const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')
const router = require('./routes/index')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)


app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`> Ready on ${PORT}`)
})
