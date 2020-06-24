import express from 'express';
import bodyParser from 'body-parser';
import expressSanitizer from 'express-sanitizer'
import cors from 'cors'
import models from './db/models/index'

const PORT = process.env.PORT || 4000;


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSanitizer());
app.use(cors())

app.use(function (err, req, res, next) {
  console.error(err.message)
  res.status(500).send(err.message)
})

app.listen(PORT, () => console.log("App running on " + PORT));

