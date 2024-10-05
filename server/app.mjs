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

// app.post("/register", async (req, res) => {
//   const newUser = {
//     ...req.body,
//     created_at: new Date(),
//   };

//   const salt = await bcrypt .genSalt(10)
//   newUser.password = await bcrypt.hash(newUser.password, salt)
//   await connectionPool.query(
//     `insert into users_table (firstname, lastname, email, password, mobile_number, created_at )
//     values ($1, $2, $3, $4, $5, $6)`,
//     [
//       newUser.firstname,
//       newUser.lastname,
//       newUser.email,
//       newUser.password,
//       newUser.mobile_number,
//       newUser.created_at,
//     ]
//   );

//   return res.status(201).json({
//     message: "Create post sucessfully",
//   });
// });

app.listen(port, () => {
  console.log(`Sever is running at ${port}`);
});
