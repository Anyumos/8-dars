const express = require('express');
require('dotenv').config()
const cors = require('cors');
const authRouter = require('./router/auth.routes');
const korzinkaRouter = require('./router/korzinka.routes');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
    messega: 'Welcome to my server'
    })
});


// Router
app.use(authRouter)
app.use(korzinkaRouter)

app.listen(PORT, () => {
    console.log('Server is running at:', PORT);
})