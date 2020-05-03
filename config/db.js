const mongoose = require("mongoose");

require("dotenv").config();

const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-zdoxl.mongodb.net/test?retryWrites=true&w=majority`;

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database Connection Established");
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
