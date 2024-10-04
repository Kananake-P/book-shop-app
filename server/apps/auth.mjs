import connectionPool from "../utils/db.mjs";
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const newUser = {
    ...req.body,
    created_at: new Date(),
  };
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  try {
    await connectionPool.query(
      `insert into users_table (firstname, lastname, email, password, mobile_number, created_at )
      values ($1, $2, $3, $4, $5, $6)`,
      [
        newUser.firstname,
        newUser.lastname,
        newUser.email,
        newUser.password,
        newUser.mobile_number,
        newUser.created_at,
      ]
    );
  } catch (error) {
    return res.status(500).json({
      message: "Server could not register because database issue",
    });
  }

  return res.status(201).json({
    message: "Register Sucessfully",
  });
});

authRouter.post("/login", async (req, res) => {
  const getDataUser = { ...req.body };

  let user;

  try {
    user = await connectionPool.query(
      `select * from users_table where email = $1 or password = $1`,
      [getDataUser.email]
    );
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  if (!user.rowCount) {
    return res.status(409).json({ message: "Email not found" });
  }
  const plainPassword = getDataUser.password;
  const hashPassword = user.rows[0].password;

  const userData = {
    email: user.rows[0].email,
  };
  const isValidPassword = await bcrypt.compare(plainPassword, hashPassword);
  if (!isValidPassword) {
    return res.status(401).json({
      message: "Password invalid",
    });
  }
  const token = jwt.sign(
    {
      email: userData.email,
    },
    process.env.SECRET_key,
    {
      expiresIn: "20m",
    }
  );
  return res.status(201).json({ message: "Login Successfully!", token: token });
});

// authRouter.post("/login", async (req, res) => {
//   const user = await db.collection("users_table").find({
//     email: req.body.email,
//   });
//   if (!email) {
//     return res.status(404).json({
//       message: "user not found",
//     });
//   }

//   const isValidPassword = await bcrypt.compare(
//     req.body.password,
//     user.password
//   );

//   if (!isValidPassword) {
//     return res.status(401).json({
//       message: "password not valid",
//     });
//   }

//   const token = jwt.sign(
//     {
//       firstName: user.firstName,
//       lastName: user.lastName,
//     },
//     process.env.SECRET_KEY,
//     {
//       expiresIn: "900000",
//     }
//   );

//   return res.json({
//     message: "login sucessfully",
//     token,
//   });
// });

export default authRouter;
