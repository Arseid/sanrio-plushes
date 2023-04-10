const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());

app.use(cors())

const products = [
  {
    id: 1,
    title: "Kuromi Plush",
    description: "Plush of Kuromi, leader of a biker gang known as \"Kuromi\'s 5\".",
    price: [47.95, 59.99],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Kuromi-Plush-_Standard_-M-Japan-Figure-4550337050316-0_592x592.jpg?v=1634268901',
    likes: 0,
    publicationDate: new Date(2023, 3, 16),
    isLiked: false,
    size: ['Small, Big']
  },
  {
    id: 2,
    title: "Hello Kitty Plush",
    description: "Plush of Hello kitty, also known as \"Kitty White\".",
    price: [32.95, 44.99],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Hello-Kitty-Plush-Toy-_Standard_-S-Japan-Figure-4901610504161-0_592x592.jpg?v=1634268404',
    likes: 0,
    publicationDate: new Date(2023, 3, 17),
    isLiked: false,
    size: ['Small, Big']
  }
]

app.get('/products', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(products)
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.set('Access-Control-Allow-Origin', '*');
  res.json(products.find((p) => p.id === id))
});

app.put('/products/:id/likes', (req, res) => {
  const id = req.params.id;
  let product = products.find((p) => p.id === id);
  if (product.isLiked) {
    product.likes--;
  } else {
    product.likes++;
  }
  product.isLiked = !product.isLiked;

  res.set('Access-Control-Allow-Origin', '*');
  res.json(product)
})

app.listen(port, () => {
  console.log(`Application exemple Ã  l'Ã©coute sur le port ${port}!`)
});
