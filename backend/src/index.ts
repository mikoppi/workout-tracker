import express from "express";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
