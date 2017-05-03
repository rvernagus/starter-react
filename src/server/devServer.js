import express from 'express'
import path from 'path'

const port = 8080
const app = express()

app.set('views', path.resolve(__dirname, 'views'))

app.use(express.static(path.resolve(__dirname, 'wwwroot')))

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello from Express!' })
})

app.listen(port, (err) => {
  if (err) {
    console.log(err) // eslint-disable-line no-console
  } else {
    console.log(`Running DEV server on http://localhost: ${port}`) // eslint-disable-line no-console
  }
})
