const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

app.use('/', router);
app.use(cors());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    next();
});

/*
app.get('/hello/:name?', (req, res) =>
    res.json(
        { message: `Hello ${req.params.name || 'world'}!` }
    )
);

 */


app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = app;