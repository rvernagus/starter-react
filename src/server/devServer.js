import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { setupRoutes } from './common'

const port = 8080
const app = express()

app.set('views', path.resolve(__dirname, 'views'))

app.use(morgan('combined'))
app.use(express.static(path.resolve(__dirname, 'wwwroot')))

setupRoutes(app)

app.listen(port, (err) => {
  if (err) {
    console.log(err) // eslint-disable-line no-console
  } else {
    console.log(`Running DEV server on http://localhost: ${port}`) // eslint-disable-line no-console
  }
})
