const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, my name is muhammed essam ...!');
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});

