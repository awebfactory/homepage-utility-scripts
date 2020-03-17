const axios = require('axios')
require('dotenv').config()

// get api and filename from command-line argument like `tags` (not `/tags`)
const api = process.argv[2]
const data = require(`../postit/post-${api}.json`)
// console.log(data, '\n')

// console.log(data);

const postit = () => {
  data.forEach(async item => {
    // console.log('item: \n', item)
    try {
      // add in leading slash
      const url = `${process.env.API_SERVER}/${api}`
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_JWT}`,
        },
      }
      // POST
      res = await axios.post(url, item, config)
      console.log(res.status, res.statusText, '\n', res.data)
    } catch (err) {
      console.error(err)
    }
  })
}

// take each item in the array of json objects and process

postit()
