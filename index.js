const express = require('express');
const dotenv = require('dotenv');

dotenv.config()
const cors = require('./src/config/corsAllow')
require('./src/db/mongodb')
const cookieParser = require('cookie-parser');
const DictRoute = require('./src/routes/dictRoute')

const app = express();
app.use(cors)
app.use(express.json());
app.use(cookieParser());
app.use(DictRoute)

const Port = process.env.PORT || 3000
app.listen(Port, () => { console.log('Server connected on port ' + Port) });
