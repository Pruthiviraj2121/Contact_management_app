const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenvc = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.port ||  8454;

// so wheever to accept the data from the clients to the server we need too use the body-parser
// which parse the clients data to the server through middleware i.e .use()
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})