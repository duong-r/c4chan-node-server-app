import express from 'express'
import cors from 'cors'
import UserController from './controllers/users/users-controller.js'
import MessagesController
  from "./controllers/messages/messages-controller.js"

const app = express()
app.use(cors())
app.use(express.json())
MessagesController(app)
UserController(app)
app.listen(process.env.PORT || 4000)