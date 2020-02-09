const axios = require('axios');

const login = async () => {
  console.log('hola');
  try {
	  res = await axios.get('http://awebfactory.org:4004/users');
		// console.log('res.data', res.data);
		console.log('res', res);
	} catch (err) {
	  console.error(err);
	}
}

login();
