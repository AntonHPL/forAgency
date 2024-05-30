const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("listening");
});

app.use(routes);

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://127.0.0.1:3306",
    changeOrigin: true,
  })
);