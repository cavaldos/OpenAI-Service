const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();
app.use(morgan("tiny"));
app.use(cors());


app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(` ✅  Listening on port  ${port} 🚀`);
});
