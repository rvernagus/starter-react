import express from 'express'
import path from 'path'

const port = 8080
const root = { root: path.join(__dirname, 'wwwroot') }

export const setupUses = (app) => {
  app.use(express.static(root.root))
}

export const setupRoutes = (app) => {
  app.get('/', (req, res) => {
    res.sendFile('index.html', root)
  })
}

export const listen = (app) => {
  app.listen(port, (err) => {
    if (err) {
      console.log(err) // eslint-disable-line no-console
    } else {
      console.log(`Running server on http://localhost: ${port}`) // eslint-disable-line no-console
    }
  })
}
