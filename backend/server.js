import path from "path";
import express from "express";
import dotnenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";
import { server, app } from "./socket/socket.js";
// const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
dotnenv.config();
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello from backend");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is listening at port ${PORT}`);
});
