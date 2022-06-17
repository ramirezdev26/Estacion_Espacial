const express = require('express');
const routerApi = require('./routes/index');
const { logError, errorHandler, wrapError } = require('./middlewares/errorHandlers');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

routerApi(app);

app.use(notFoundHandler);

app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is runing inport: ' + port);
});
