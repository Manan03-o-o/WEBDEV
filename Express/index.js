import express from "express"; //express module returns a function
const app = express(); //calling express() return an object
app.get("/", (req, res) => { 
// GET-request resouce from server
//POST- sending resource to server
//  PUT- replace resource
//  DELETE- delete resource
//  PATCH- update resourcef
  res.send("Hello from Express 🚀");
  
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>hello this is me</p> 🚀");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1><p>13322</p> 🚀");
});

app.listen(3000,() => {
    console.log("Server started on port 3000");
});

