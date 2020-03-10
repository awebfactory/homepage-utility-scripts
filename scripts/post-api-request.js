const axios = require('axios')
require('dotenv').config()

const data = require('../postit/post-data.json')
const api = process.argv[2]

// console.log(data);

// take each item in the array of json objects and process
data.forEach(item => console.log('item: \n', item))
