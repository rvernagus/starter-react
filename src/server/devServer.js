import express from 'express'

const port = 8080
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Running on http://localhost:' + port)
  }
})
