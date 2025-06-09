const express = require('express');
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./db.js");
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json()); 

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log("✅ Server is listening on port 4000");
    });
    db = getDb();
  } else {
    console.log("❌ Error connecting to database:", err);
  }
});

app.post("/signup", (req, res) => {
  let user = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password
  };

  db.collection("User").insertOne(user)
    .then((result) => {
      console.log("User inserted:", result.insertedId);
      res.status(201).send({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ success: false, error: err });
    });
});

app.post('/login',async(req,res)=>{
    let user = {Email: req.body.Email, Password: req.body.Password};
    const result = await db.collection('User').findOne(user);
    if(result){
        console.log("User Found", result);
        res.send(result);
    }else{
      console.log('Not found')
      res.send(0);
    }
})
