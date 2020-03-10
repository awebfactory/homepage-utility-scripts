const axios = require('axios')
require('dotenv').config()

const getUsers = async () => {
  const api = '/users'
  try {
    const url = `${process.env.API_SERVER}${api}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    res = await axios.get(url, config)
    // console.log('res.data', res.data);
    console.log(res.status, res.statusText, '\n', res.data)
  } catch (err) {
    console.error(err)
  }
}

getUsers()
