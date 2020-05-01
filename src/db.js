const mongoose = require("mongoose");

require("dotenv").config();

const dbURI = `mongodb+srv://oxoyeastar:${process.env.MONGO_PASSWORD}@cluster0-9zwxl.mongodb.net/pbx?retryWrites=true&w=majority`;

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database Connection Established");
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
