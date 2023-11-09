const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('Hello Shameel!');
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }

);
