const express = require("express");
const app = express();
const db = require("./config/db");
require("dotenv").config();

const User = require("./model/user");
const Room = require("./model/room");

// for cross origin access
var cors = require("cors");
const { find } = require("./model/user");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/user-room/save", (req, res) => {
  const {
    name,
    email,
    contact_number,
    address,
    user_id,
    number_of_persons,
    number_of_nights,
    type_of_room,
  } = req.body;

  const user = new User({
    name,
    email,
    contact_number,
    address,
  });

  user.save();

  const room = new Room({
    user_id,
    number_of_persons,
    number_of_nights,
    type_of_room,
  });

  room.save();
  console.log("user added");
  res.end("Room booekd");
});

//Connecting to MongoDB atlas
db.connect();

// Listening on port 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
