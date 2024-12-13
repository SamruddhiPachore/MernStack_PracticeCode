
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/items', (req, res) => {
	res.send("got a post request")
})

app.put('/items/:id', (req, res) => {
  res.send(`Got a PUT request at /items/${req.params.id}`)
})

app.delete('/items/:id', (req, res) => {
  res.send(`Got a DELETE request at /items/${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 