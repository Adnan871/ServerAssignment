const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3053;

app.use(express.json())
app.use(bodyParser.urlencoded())
app.use(cors({
    origin: '*'
}));



app.post('/calculateSum', (req, res) => {
    let number_one = req?.body?.numberOne;
    let number_two = req?.body?.numberTwo;
    res.status(201).json({sum: number_one+number_two})
})


app.listen(PORT, () => {  
    console.log('server running....')
})