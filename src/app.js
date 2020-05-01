const express = require("express");
// const user = require("../routes/user");
const port = process.env.PORT || 3000;
const app = express();

// require("./db");

// app.use("/user", user);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
