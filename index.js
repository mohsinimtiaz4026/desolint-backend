const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();

// database configure
require("./config");

// cross platform compatibility
app.use(cors());

// body-parser
app.use(express.json());

//   routes
app.use('/api', require("./routers/index"));
app.use('/uploads', express.static('uploads'));

// dotenv configure
dotenv.config({ path: ".env" });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on http://localhost:${PORT}`));

