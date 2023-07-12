import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 8080;

// const DB = process.env.DB_CONNECTION.replace(
//   "<password>",
//   process.env.DB_PASSWORD
// );

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => console.log("Connection to DB failed: ", err));

app.listen(port, console.log(`server started at port ${port}`));
