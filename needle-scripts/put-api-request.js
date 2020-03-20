const needle = require('needle')
require('dotenv').config()

const api = process.argv[2]
const data = require(`../postit/put-${api}.json`)

const putApiReq = (api, data) => {
  data.forEach(async item => {
    try {
      const id = item._id
      const url = `${process.env.API_SERVER}/${api}/${id}`
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_JWT}`,
        },
      }
      const res = await needle('put', url, item, options)
      console.log(JSON.stringify(res.body, null, 4))
    } catch (err) {
      console.error(err.message)
    }
  })
}

putApiReq(api, data)
