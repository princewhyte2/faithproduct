const express = require('express')
const cors = require('cors')
const app = express()
const port = 3003

app.use(cors())
app.use(express.json())

const productData = [
    {
      "id": 1,
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).",
      "price": 80000
    },
    {
      "id": 2,
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).",
      "price": 80000
    },
    {
      "id": 3,
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).",
      "price": 80000
    },
    {
      "id": 4,
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "lorem ipsum",
      "price": 80000
    },
    {
      "id": 5,
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "lorem ipsum",
      "price": 80000
    },
    {
      "id": 6,
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "lorem ipsum",
      "price": 80000
    }
  ]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/productData', (req, res) => {
  res.json(productData)
})

app.post('/productData', (req, res) => {
  const { product, content, price, image } = req.body
  const newProduct = { product, content, price, image }
  productData.push(newProduct)
  res.json(newProduct)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})