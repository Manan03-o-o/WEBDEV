import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>🚀");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
  });
app.put("/user/manan", (req, res) => {
    res.sendStatus(200);
});
app.patch("/user/manan", (req, res) => {
    res.sendStatus(200);
    });
app.delete("/user/manan", (req, res) => {
    res.sendStatus(200);
     
});
// get , post , put , patch ,delete are route-handler functions

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});