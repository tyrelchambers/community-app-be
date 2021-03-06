import express from 'express'
import { authHandler } from '../../middleware/middleware'

const app = express.Router()

app.post('/register', authHandler, async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;

    console.log(email, password)
  } catch (error) {
    next(error)
  }
})

module.exports = app