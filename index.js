const express = require("express");
const app = express();

const serveStatic = (localFilename) => {
  return (req,res) => {
     res.sendFile(localFilename, { root: __dirname }) }
};

app.get("/", serveStatic("index.html") );
app.get("/face.js", serveStatic("face.js") );

module.exports = {
    app
}
