import {Box, Button, Container, Grid2, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Message} from "../../types.ts";
import * as React from "react";
import axiosApi from "../../axiosApi.ts";

const Encrypter = () => {

    const [message, setMessage] = useState<Message>({
        message: "",
        password: ""
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage(prev => ({...prev, [e.target.name]: e.target.value}));
        console.log(e.target.value);
    };

    const sendMessage = async () => {
        if (message.password.length > 0 && message.message.length > 0) {
            await axiosApi.post('/encrypt', message)
        } else {
            alert('Enter message and password');
        }
    };

    console.log(message);

    return (
        <Container>
                <Box sx={{display: "flex", flexDirection: "row", columnGap: 2}}>
                        <Grid2>
                            <Typography component="p">Decoded message</Typography>
                            <TextareaAutosize aria-label="minimum height" minRows={10} name="message" onChange={onChange} value={message.message} required />
                            <Typography component="p">Enter password</Typography>
                            <Grid2 container spacing={2}>
                                <TextField id="outlined-basic" variant="outlined" name="password" value={message.password} onChange={onChange} required />
                                <Button variant="text" onClick={sendMessage}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="#000" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </Button>
                                <Button variant="text">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="#000" d="m5 15 7-7 7 7"/>
                                    </svg>
                                </Button>
                            </Grid2>
                            <Typography component="p">Encoded message</Typography>
                            <TextareaAutosize aria-label="minimum height" minRows={10} name="encMessage" onChange={onChange} value={message.message} required />
                        </Grid2>
                </Box>
        </Container>
    );
};

export default Encrypter;