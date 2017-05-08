import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { setupUses, setupRoutes, listen } from './common'

const app = express()

app.use(morgan('combined'))

setupUses(app)
setupRoutes(app)
listen(app)
