const express = require("express");

const app = express();

//middilware = function that happen when the request come in before the responce just like the one in app.get the callback fuction is a middleware
//we can all add our own middleware express will default pass the req and res as param for us by default 
// we need to add the next() param do that express could move to the next middleware



//to add the logger to all our middleware app.use() meddle ware

// we can also pasing multiple middleware to do that put them in an array


const looger = (req, res, next) => {
  console.log(req.hostname, req.path, req.query);
  const name = 'hamza'

  //we can all pass item to req to use it in the next middleware
  req.name = name
  next();
};

const authors = (req, res, next) => {
console.log('authorotized')

}
app.use([looger,authors]);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("runing 300");
});
