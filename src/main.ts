const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
var colors = require("ansicolors");
const networkInterfaces = require("./config/IP.ts");
const IP = networkInterfaces.getIPAddresses();
const { Configuration, OpenAIApi } = require("openai");

app.use(express.json());
dotenv.config();
app.use(morgan("tiny"));
app.use(cors());
// =======================================
const davinci = async (prompt, key) => {
  const configuration = new Configuration({
    apiKey: key,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "you're an a AI assistant that replies to all my questions in markdown format.",
      },
      { role: "user", content: "hi" },
      { role: "assistant", content: "Hi! How can I help you?" },
      { role: "user", content: `${prompt}?` },
    ],
    temperature: 0.3,
    max_tokens: 1000,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.2,
  });

  return response;
};

const ask = async () => {
  try {
    const response = await davinci(
      "i need soour code radix sort",
      process.env.OPENAI_API_KEY
    );
    console.log(response);

    console.log(response.data.choices[0].text);
  } catch (error) {
    console.log("error");
  }
};

// ask();

// Routes
app.use("/", (req, res) => {
  res.send("Hello World , wellcome to my Open AI Service");
});

app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const host = "0.0.0.0";
const server = app.listen(port, () => {
  console.log(`\n  🚀  ➜ Local:    `, colors.blue(`http://localhost:${port}`));
  console.log(`  🚀  ➜ Network:  `, colors.green(`http://${IP}:${port}\n`));
});
