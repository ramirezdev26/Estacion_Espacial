const express = require('express');

const routerApi = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('Server is runing inport: ' + port);
});
