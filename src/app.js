const express = require('express')


const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res)  => res.send('Hello World!'));

app.use(express.static('public'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))