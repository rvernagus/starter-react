import express from 'express'
import path from 'path'
import compression from 'compression'

const port = 8080
const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(compression())
app.use(express.static(path.resolve(__dirname, 'wwwroot')))

app.get('/', (req, res) => {
  res.render('index', {message: 'Hello from Express!'})
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Running PROD server on http://localhost:' + port)
  }
})
