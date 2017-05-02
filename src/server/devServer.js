import express from 'express'
import path from 'path'

const port = 8080
const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {message: 'Hello from Express!'})
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Running on http://localhost:' + port)
  }
})
