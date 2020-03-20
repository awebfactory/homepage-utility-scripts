const needle = require('needle')
require('dotenv').config()

const api = process.argv[2]
const data = require(`../postit/post-${api}.json`)

const postApiReq = (api, data) => {
  data.forEach(async item => {
    try {
      const url = `${process.env.API_SERVER}/${api}`
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_JWT}`,
        },
      }
      const res = await needle('post', url, item, options)
      console.log(JSON.stringify(res.body, null, 4))
    } catch (err) {
      console.error(err.message)
    }
  })
}

postApiReq(api, data)
