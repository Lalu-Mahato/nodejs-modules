const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', apiRoutes);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port: ${port}`));
