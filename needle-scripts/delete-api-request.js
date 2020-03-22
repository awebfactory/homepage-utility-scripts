const needle = require('needle')
require('dotenv').config()

const api = process.argv[2]
const id = process.argv[3]

console.log('trying with ', api, id)

const deleteApiReq = async api => {
  try {
    // alternative: call with: yarn delete blog-posts 5e76894167e11a4c64922098
    // const url = `${process.env.API_SERVER}/${api}/${id}`
    // call like GET with: yarn delete blog-posts 5e76894167e11a4c64922098
    const url = `${process.env.API_SERVER}/${api}`
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.API_JWT}`,
      },
    }
    console.log('the url', url)
    console.log('the options', options)
    // no body, but param is expected by needle, so null
    const res = await needle('delete', url, null, options)
    // result comes back in JSON so no need to parse.
    // Additional params null, 4 make for pretty print
    console.log(JSON.stringify(res.body, null, 4))
  } catch (err) {
    console.error(err.message)
  }
}

deleteApiReq(api)
