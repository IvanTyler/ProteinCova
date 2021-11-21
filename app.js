const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const indexRouter = require('./routes/indexRoute')


app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`server started PORT: ${PORT}`);
})