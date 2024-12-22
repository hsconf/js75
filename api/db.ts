import {promises as fs} from "fs";
import {Message} from "./types";
const Caesar = require("caesar-salad").Caesar;

let messages: Message[] = []
const msgFile = './message.json';

 const db = {
    async init() {
        const rm = await fs.readFile(msgFile)
        messages = JSON.parse(rm.toString());
    },
    async encryptMessage(msg: Message) {
        void this.init()
        messages.push(msg);
        void this.save()
    },
     async decryptMessage(msg: Message) {

     },
     async save() {
        void fs.writeFile(msgFile, JSON.stringify(messages))
     }
}

export default db;