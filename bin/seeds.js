// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const bcryptSalt = 10

mongoose
  .connect('mongodb://localhost/ih2', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

let users = [
  {
    username: 'alice',
    password: bcrypt.hashSync('alice', bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: 'bob',
    password: bcrypt.hashSync('bob', bcrypt.genSaltSync(bcryptSalt))
  }
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`)
    console.log(usersCreated.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

const places = [
  {
    name: 'Auckland NZ',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564987115/Auckland_New_Zealand_dan-freeman-hIKVSVKH7No-unsplash_xtqbte.jpg',
    lat: -36.853904,
    lon: 174.763805,
    category: 'Ciudad'
  },
  {
    name: 'Fuzhou',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564987115/Fuzhou_China_gundam-YxJVijPhzfg-unsplash_j0svrc.jpg',
    lat: 26.0774954,
    lon: 119.2918215,
    category: 'Ciudad'
  },
  {
    name: 'Tallinn',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564987115/tommi-selander-4-bfQAAlELM-unsplash_zd7fzn.jpg',
    lat: 59.4372155,
    lon: 24.7453688,
    category: 'Ciudad'
  },
  {
    name: 'Vancouver',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564987115/Hadden_Park_Canada_deb-rousseau-5tCXFBXAom4-unsplash_zlekub.jpg',
    lat: 49.3414,
    lon: -123.12900000000002,
    category: 'Ciudad'
  },
  {
    name: 'Chicago',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564987115/Chicago_US_max-bender-s4I1xpX_ny8-unsplash_m8ht8i.jpg',
    lat: 41.8755616,
    lon: -87.6244212,
    category: 'Ciudad'
  },
  {
    name: 'Redang- Island',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564986937/Redang_Island_Kuala_Terengganu_Malaysia_www-journeytoplaces-com-423lumJ9s7c-unsplash_qivb5g.jpg',
    lat: 5.78185,
    lon: 103.01099999999997,
    category: 'Sol y Playa'
  },
  {
    name: 'Maldivas',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564986937/Maldivas_love-maldives-5dXZJ-2ubMk-unsplash_jywlhq.jpg',
    lat: 4.7064352,
    lon: 73.3287853,
    category: 'Sol y Playa'
  },
  {
    name: 'Dakar',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564986937/Dakar_Senegal_aliunix-NI265AcvQZs-unsplash_usj2qu.jpg',
    lat: 14.693425,
    lon: -17.447938,
    category: 'Sol y Playa'
  },
  {
    name: 'Mallorca cala des moro',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564986937/Mallorca_Cala_des_Moro%CC%81_reiseuhu-aue3vSw8DQQ-unsplash_vlov0c.jpg',
    lat: 39.504776,
    lon: 3.301722,
    category: 'Sol y Playa'
  },
  {
    name: 'Seychelles',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564986937/Seychelles_ian-badenhorst-SuT2MhkdyBQ-unsplash_nqk4dc.jpg',
    lat: -4.6574977,
    lon: 55.4540146,
    category: 'Sol y Playa'
  },
  {
    name: 'San Fermines Pamplona',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564986595/san-fermin-pamplona-navarra-0D7Wtqhe-AQ-unsplash_hnixjt.jpg',
    lat: 42.8185,
    lon: -1.6442600000000311,
    category: 'Cultural'
  },
  {
    name: 'Agra India',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1564986595/Agra_India_ibrahim-rifath-Y6tBl0pTe-g-unsplash_ksymb0.jpg',
    lat: 27.1752554,
    lon: 78.0098161,
    category: 'Cultural'
  },
  {
    name: 'Konya Turkia',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564986595/hulki-okan-tabak-WevJJ3GxfnI-unsplash_zbfuby.jpg',
    lat: 37.8719963,
    lon: 32.4844015,
    category: 'Cultural'
  },
  {
    name: 'Granada Nicaragua',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564986595/tyler-donaghy-U65zwzp3V9k-unsplash_cdbtgf.jpg',
    lat: 11.9347,
    lon: -85.9588,
    category: 'Cultural'
  },
  {
    name: 'Morocco',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1564986595/Morocco_toa-heftiba-pcbSQTQr2-I-unsplash_cscklf.jpg',
    lat: 31.0451,
    lon: -7.13103000000001,
    category: 'Cultural'
  },
  {
    name: 'Barron Falls, Australia',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1564987836/Barron%20Falls.jpg',
    lat: -16.832645,
    long: 145.643732,
    category: 'Naturaleza'
  },

  {
    name: 'Jökulsárlón,Islandia',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1564987836/J%C3%B6kuls%C3%A1rl%C3%B3n.jpg',
    lat: 64.077664,
    long: -16.231425,
    category: 'Naturaleza'
  },

  {
    name: 'Huaraz, Perú',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1564987836/Huaraz.jpg',
    lat: -9.362255,
    long: -77.362237,
    category: 'Naturaleza'
  },

  {
    name: 'White Poket, Arizona',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1564988178/White%20Poket.jpg',
    lat: 36.955821,
    long: -111.904084,
    category: 'Naturaleza'
  },

  {
    name: 'Mgarr, Malta',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1564987836/Mgarr.jpg',
    lat: 35.923932,
    long: 14.343845,
    category: 'Naturaleza'
  }
]
