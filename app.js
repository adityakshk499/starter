const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const port = 3000;
const connectDB = require("./db/connect");
require('dotenv').config()

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("hello");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`The app is live on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
