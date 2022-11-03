const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const {home, css, main} = require("./controllers/pageCtrl")


app.get("/", home)
app.get("/css", css)
app.get("/main", main)

try {
    ojiieje()
} catch {
    rollbar.critical('caught a backend failure')
}


const { PORT } = process.env

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))