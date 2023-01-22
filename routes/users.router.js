const express = require('express');
//npm i --save-dev faker@5.5.3
const faker = require('faker');

const router = express.Router()

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if ( limit && offset){
    res.json({
      limit,
      offset
    })
  }else {
    res.send('No hay parametros')
  }
})

module.exports = router;
