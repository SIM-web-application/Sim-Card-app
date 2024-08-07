import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dayjs from "dayjs";
import 'dotenv/config';
import UsersRoutes from './routes/user.js';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5555;
const app = express();
app.use(express.json());
// Sử dụng cookie-parser middleware
app.use(cookieParser());

app.use(cors());
app.use('/api/users', UsersRoutes);

mongoose.connect(process.env.MONGODB_URL)
    .then(async () => {
        console.log("app connected to database");
        app.listen(port, () => {
        console.log(`app is listenning to port: ${port}`);
        });
        console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    })
    .catch((error)=>{
        console.log(error);
        console.error("Lỗi kết nối tới MongoDB:", error);
    });
