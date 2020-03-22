const axios = require('axios')
require('dotenv').config()

const delApiReq = async api => {
  try {
    // add in leading slash
    const url = `${process.env.API_SERVER}/${api}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_JWT}`,
      },
    }
    res = await axios.delete(url, config)
    console.error(res.status, res.statusText, '\n')
    console.log(JSON.stringify(res.data))
  } catch (err) {
    console.error(err.message)
  }
}

// Example call: node del-api /tags
const api = process.argv[2]

delApiReq(api)
