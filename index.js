const express = require('express');
const fetch = require('node-fetch');
const credentials = require('./lol_creds/credentials');

const app = express();

require('./routes/mainRoute')(app);

fetch(credentials.summoners_byname_url + credentials.api_key)
  .then(response => response.json())
  .then(data => console.log(data));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));