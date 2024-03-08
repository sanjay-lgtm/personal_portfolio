const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/sendmailroutes");
const path = require('path')
const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend


app.use(express.static(path.join(  __dirname + "./client/build")));//__dirname
//Signup and login
app.use("/email", emailRoutes);


app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});