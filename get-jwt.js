const axios = require('axios');

const login = async () => {
  try {
	  const url = 'http://awebfactory.org:4004/users';
		const data = {};
		const config = {
		  headers: {
			  'Content-Type': 'application/json'
      }
		}
	  res = await axios.get(url, data, config);
		// console.log('res.data', res.data);
		console.log(res.status, res.statusText, "\n", res.data);
	} catch (err) {
	  console.error(err);
	}
}

login();
