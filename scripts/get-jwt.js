const axios = require('axios')
require('dotenv').config()

const login = async () => {
  const api = '/auth/local'
  try {
    const url = `${process.env.API_SERVER}${api}`
    const data = {
      identifier: `${process.env.API_USER}`,
      password: `${process.env.API_PASSWORD}`,
    }
    console.log(url)
    console.log(data)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    // POST
    res = await axios.post(url, data, config)
    console.log(res.status, res.statusText, '\n', res.data)
  } catch (err) {
    console.error(err)
  }
}

login()
