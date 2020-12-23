const express = require('express');
const fetch = require('node-fetch');
const credentials = require('./lol_creds/credentials');

const app = express();

require('./routes/mainRoute')(app);

// fetch(credentials.summoners_byname_url + credentials.api_key)
//   .then(response => response.json())
//   .then(data => console.log(data));

const fetchAccount = async () => {
  const res = await fetch(credentials.summoners_byname_url + credentials.api_key);
  const json = await res.json();

  console.log(json);
}

fetchAccount();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));