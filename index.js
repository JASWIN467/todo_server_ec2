import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Db/db.js";
import route from "./Routes/todoRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/csbs', route);

connectDb();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
