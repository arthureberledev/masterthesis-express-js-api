const app = require("./app");
const https = require("https");
const fs = require("fs");

const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const options = {
  cert: fs.readFileSync("/ssl/cert.pem"),
  key: fs.readFileSync("/ssl/key.pem"),
  passphrase: "password123",
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
