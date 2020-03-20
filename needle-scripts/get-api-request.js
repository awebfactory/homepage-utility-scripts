const needle = require('needle')
require('dotenv').config()

const api = process.argv[2]

// console.log(api)

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
    // result comes back in JSON so no need to parse.
    // Additional params null, 4 make for pretty print
    console.log(JSON.stringify(res.body, null, 4))
  } catch (err) {
    console.error(err.message)
  }
}

getApiReq(api)
