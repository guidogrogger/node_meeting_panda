const express = require("express");
const app = express();

const serveStatic = (localFilename) => {
  return (req,res) => {
     res.sendFile(localFilename, { root: __dirname }) }
};

app.get("/", serveStatic("index.html") );
// TODO better way of handling static files
app.get("/static/face.js", serveStatic("face.js") );
//app.get("/app/face.js", serveStatic("face.js") );

module.exports = {
    app
}
