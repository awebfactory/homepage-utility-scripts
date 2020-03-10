const axios = require('axios');
require('dotenv').config();

  /*
const getApiReq = async (api) => {
  try {
	  const url = `${process.env.API_SERVER}${api}`
		const config = {
		  headers: {
			  'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_JWT}` 
      }
		}
    // console.log(config)
//	  res = await axios.get(url, config);
//	  res = await axios.post(url, config);
		// console.log('res.data', res.data);
//		console.error(res.status, res.statusText, "\n");
 //   console.log(JSON.stringify(res.data));
	} catch (err) {
	  console.error(err.message);
	}
}
  */

// Example call: node get-api /tags
const data = require('./data/post-data.json');
const api = process.argv[2];

// console.log(data);


data.forEach( item => console.log("item: \n", item));

/*
items.forEach( item => {
  console.log(item);
  //data = JSON.parse(JSON.stringify(item));
  //console.log(data);
  // getApiReq(api, items);
});
*/
