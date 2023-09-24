const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes");

app.use(express.json());

app.use((req, _, next) => {
  url = req.host + port + req.baseUrl + req.url;
  console.log(
    "Time: %s Request Type: %s URL: %s",
    Date.now().toString(),
    req.method,
    url,
  );
  next();
});

app.use(router);

app.listen(port, () => {
  console.log(`App listen on port: ${port}`);
});
