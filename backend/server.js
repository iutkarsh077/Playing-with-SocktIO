import express from "express";
import dotnenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
dotnenv.config();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is listening at port ${PORT}`);
});
