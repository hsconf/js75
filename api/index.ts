import express from "express";
import cors from "cors"
import db from "./db";
const Caesar = require('caesar-salad').Caesar;

const app = express();
const port = 8000;

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.post("/decrypt", async (req: express.Request, res: express.Response) => {
    await db.init();
    const fil  = db.getAll().find((m) => m.password === req.body.password);
    if (fil !== undefined) {
        const dec = Caesar.Decipher('c').crypt(fil.message);
        res.send({
            ...fil,
            message: dec
        });
    }
})
app.post("/encrypt", async (req: express.Request, res: express.Response) => {
    void db.init();
    void db.encryptMessage(req.body);
    const msg = db.getAll().find((m) => m.password === req.body.password);
    res.send(msg);
})

const run = async () => {


    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    })
};

void run();