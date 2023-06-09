import {Configuration, OpenAIApi} from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration ({
    organization : API_ORG,
    apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages : [
            {role: "user", content:"Hello World"}
        ]
    })
    res.json({
        completion: completion.data.choices[0].message})
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})