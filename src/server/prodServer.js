import express from 'express'
import path from 'path'
import compression from 'compression'

const port = 8080
const app = express()

app.use(compression())
app.use(express.static(path.resolve(__dirname, 'wwwroot')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, (err) => {
  if (err) {
    console.log(err) // eslint-disable-line no-console
  } else {
    console.log(`Running PROD server on http://localhost: ${port}`) // eslint-disable-line no-console
  }
})
