import {promises as fs} from "fs";
import {Message, MessageWithoutDecrypt} from "./types";
const Caesar = require('caesar-salad').Caesar;

let messages: MessageWithoutDecrypt[] = []
const msgFile = './message.json';

 const db = {
    async init() {
        const rm = await fs.readFile(msgFile)
        messages = JSON.parse(rm.toString());
    },
    async encryptMessage(msg: Message) {
        const enc = Caesar.Cipher('c').crypt(msg.message);
        const fil = messages.find((m) => m.password === msg.password);
        if (!fil) {
            messages.push({
                password: msg.password,
                message: enc
            });
        } else {
            return 'This password already registered!';
        }
        await this.save();
    },
     async save() {
        void fs.writeFile(msgFile, JSON.stringify(messages))
     },
     getAll() {
        return messages;
     }
}

export default db;