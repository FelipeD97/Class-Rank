const express = require("express"),
    es6Renderer = require("express-es6-template-engine"),
    path = require("path"),
    cookieParser = require("cookie-parser"),
    logger = require("morgan"),
    session = require("express-session"),
    FileStore = require("session-file-store")(session);

    

const indexRouter = require("./routes/index"),
    rankRouter = require("./routes/rank"),
    usersRouter = require("./routes/users");

    require("dotenv").config();

const app = express();

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({

        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        is_logged_in: false
    })
);

app.use("/", indexRouter);
app.use("/rank", rankRouter);
app.use("/users", usersRouter);

module.exports = app;
