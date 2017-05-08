import path from 'path'

const root = { root: path.join(__dirname, 'wwwroot') }

export const setupRoutes = (app) => {
  app.get('/', (req, res) => {
    res.sendFile('index.html', root)
  })
}
