import express from "express";
import connectionPool from "./utils/db.mjs";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import authRouter from "./apps/auth.mjs";
import cors from "cors";
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.get("/test", (req, res) => {
  return res.json("Server API is working");
});

app.get("/", async (req, res) => {
  
  let results;
  try {
    results = await connectionPool.query(
      `select * from book_table order by book_id`
    );
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json(results.rows);
});

app.listen(port, () => {
  console.log(`Sever is running at ${port}`);
});
