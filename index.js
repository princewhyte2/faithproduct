const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3003

app.use(cors())
app.use(express.json())

const productData = [
    {
      "id": uuidv4(),
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).",
      "price": 80000
    },
    {
      "id": uuidv4(),
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).",
      "price": 80000
    },
    {
      "id": uuidv4(),
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers. Participants can compete in one or all online rounds held throughout the year, and will have the opportunity to develop and grow their programming abilities while getting a glimpse into the technical skills needed for a career at Google (top participants may be invited to interview at Google).",
      "price": 80000
    },
    {
      "id": uuidv4(),
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "lorem ipsum",
      "price": 80000
    },
    {
      "id": uuidv4(),
      "image": "https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "product": "Beautiful",
      "content": "lorem ipsum",
      "price": 80000
    },
    {
      "id": uuidv4(),
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

app.get("/productData/:id", (req, res) => {
  const productId = req.params.id
  
  const product = productData.find(product => product.id === productId)
  if (!product) return res.status(404).send("The product with the given ID was not found")
  res.json(product)
}
  )

app.post('/productData', (req, res) => {
  const { product, content, price, image } = req.body
  const newProduct = {id:uuidv4(), product, content, price, image }
  productData.push(newProduct)
  res.json(newProduct)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})