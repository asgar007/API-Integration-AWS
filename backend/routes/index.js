const express = require('express');
const router = express.Router();

// router.use('/posts', require('./posts'));
// router.use('/users', require('./users'));
router.get('/api/v1', (req, res)=>{
    const products = [
        {
          "id": 1,
          "name": "Fan",
          "description": "This is the description for Sample Product 1.",
          "price": 19.99,
          "category": "Electronics"
        },
        {
          "id": 2,
          "name": "Shirt",
          "description": "This is the description for Sample Product 2.",
          "price": 29.99,
          "category": "Clothing"
        },
        {
          "id": 3,
          "name": "Bed",
          "description": "This is the description for Sample Product 3.",
          "price": 9.99,
          "category": "Home Decor"
        },
        {
          "id": 4,
          "name": "Bed Room",
          "description": "This is the description for Sample Product 4.",
          "price": 49.99,
          "category": "Electronics"
        },
        {
          "id": 5,
          "name": "Face Cream",
          "description": "This is the description for Sample Product 5.",
          "price": 14.99,
          "category": "Beauty"
        },
        {
          "id": 6,
          "name": "Iron",
          "description": "This is the description for Sample Product 6.",
          "price": 39.99,
          "category": "Electronics"
        },
        {
          "id": 7,
          "name": "Pant",
          "description": "This is the description for Sample Product 7.",
          "price": 24.99,
          "category": "Clothing"
        },
        {
          "id": 8,
          "name": "Chair",
          "description": "This is the description for Sample Product 8.",
          "price": 11.99,
          "category": "Home Decor"
        },
        {
          "id": 9,
          "name": "Sample Product 9",
          "description": "This is the description for Sample Product 9.",
          "price": 34.99,
          "category": "Beauty"
        },
        {
          "id": 10,
          "name": "Sample Product 10",
          "description": "This is the description for Sample Product 10.",
          "price": 59.99,
          "category": "Electronics"
        }
      ]
      res.send(products);
})

router.use('/user', require('./user'));
router.use('/vendor', require('./vendor'));
module.exports = router;