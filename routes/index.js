const express = require('express')
const router = express.Router()

const Places = require('../models/Places.model')

/* GET home page */
router.get('/', (req, res, next) => {
  Places.find()
    .then(places => res.render('index', { places }))
    .catch(err => console.log(err))
})

// router.get('/api', (req, res, next) => {
//   Places.find()
//     .then(allPlaces => res.json(allPlaces))
//     .catch(err => console.log('error', console.log(err)))
// })
module.exports = router
