export interface Message {
    message: string;
    password: string;
    decrypt: string;
}

export type MessageWithoutDecrypt = Omit<Message, "decrypt">;