const express = require('express');
//npm i --save-dev faker@5.5.3
const faker = require('faker');

const router = express.Router()

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

module.exports = router;
