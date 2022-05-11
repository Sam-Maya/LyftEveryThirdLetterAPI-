const functions = require("firebase-functions");
const express = require('express')
const app = express()

app.use(express.json())

app.post('/test', (req, res) => {
  let newStr = {
    return_string: everyThirdLetter(req.body.string_to_cut)
  }
  res.send(newStr)
})

function everyThirdLetter(str){
  return str.split('').filter((x, i) => (i+1) % 3 === 0).join('')
}

exports.lyftApi = functions.https.onRequest(app)