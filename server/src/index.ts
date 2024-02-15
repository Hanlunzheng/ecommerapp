import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express(); //hold my api

app.use(express.json()); //middleware

app.use(cors()); //allow connection and access to api from react

app.use("/user", userRouter); // http:localhost3001/user/register
app.use("/product", productRouter);

mongoose.connect(
  "mongodb+srv://AaronFang:Arsenal19960716@ecommerce.rgwmwu9.mongodb.net/ecommerce"
);

app.listen(3001, () => {
  console.log("server started");
});
