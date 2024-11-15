import express from "express";
import dotnenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotnenv.config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is listening at port ${PORT}`);
});
