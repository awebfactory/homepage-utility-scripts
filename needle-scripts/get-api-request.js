const needle = require('needle')
require('dotenv').config()

const api = process.argv[2]

console.log(api)

const getApiReq = async api => {
  try {
    const url = `${process.env.API_SERVER}/${api}`
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_JWT}`,
      },
    }
    // not necessary: {json: true}
    // const res = await needle('get', url, {json: true}, options)
    const res = await needle('get', url, options)
    console.log(res.body)
  } catch (err) {
    console.error(err.message)
  }
}

getApiReq(api)
