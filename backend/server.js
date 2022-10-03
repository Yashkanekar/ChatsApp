const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();

// As we will be passing Json data to the server from the frontend hence, here we configure the server to recieve data in json format
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running smoothly");
});

//we used app.use instead of app.get/post etc
//now we abstract out the logic for the specified route in a seperate file called "userRoutes"
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on port ${PORT}`));
