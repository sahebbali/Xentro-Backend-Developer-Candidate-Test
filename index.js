require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const port = 2476;
const app = express();

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};
// Middleware
const middleware = [
  cors(corsOptions),
  express.json(),
  express.urlencoded({ extended: true }),
];
app.use(middleware);
connectDB();

app.get("/", (req, res) => {
  return res.send("Hello Xentro Backend Developer Candidate Test!");
});

app.use("/api", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server is running at port ", port);
});
