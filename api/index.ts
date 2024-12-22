import express from "express";
import {promises as fs} from "fs";
import cors from "cors"
import db from "./db";

const app = express();
const port = 8000;

app.use(cors({
    origin: "http://localhost:5173" // Укажите ваш фронтенд-домен
}));

app.use(express.json());

app.get("/decrypt", (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
    console.log(req.body)
})
app.post("/encrypt", async (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
    void db.encryptMessage(req.body);
})
void db.init()
const run = async () => {



    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    })
};

void run();