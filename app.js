import express from "express"
import path from "path"

const app = express()
const __dirname = path.resolve();
const port = 8888

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/code', function(req, res) {
    console.log(`requets: ${req}`)
    res.sendFile(path.join(__dirname, '/receiveCode.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})