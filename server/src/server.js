import express from "express";
import connectToDB from "./config/db.js";
import usersRoutes from "./routes/usersRoutes.js"

const app = express();
const PORT = 3000;

app.use('/api/users', usersRoutes);


connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log("PORT: " + PORT);
    });
});