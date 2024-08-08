const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");

// MongoDB
mongoose
  .connect("mongodb+srv://swayam1105:Wm2jZRDTrBTxOA4l@cluster0.qwaetqn.mongodb.net/jobPortal?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// initialising directories
// if (!fs.existsSync("./public")) {
//   fs.mkdirSync("./public");
// }
// if (!fs.existsSync("./public/resume")) {
//   fs.mkdirSync("./public/resume");
// }
// if (!fs.existsSync("./public/profile")) {
//   fs.mkdirSync("./public/profile");
// }

const app = express();
const port = 4444;

app.use(bodyParser.json()); // allows Express to read the request body and parse it into a JavaScript object
app.use(bodyParser.urlencoded({ extended: true })); // tells body-parser to parse the request body if it is in URL-encoded format

// Setting up middlewares
app.use(cors());
app.use(express.json());  //for parsing json data into requestbody
app.use(passportConfig.initialize());  //initialized middleware for authentication

// Routing
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
