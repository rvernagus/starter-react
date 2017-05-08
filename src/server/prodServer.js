import express from 'express'
import compression from 'compression'
import { setupUses, setupRoutes, listen } from './common'

const app = express()

app.use(compression())

setupUses(app)
setupRoutes(app)
listen(app)
